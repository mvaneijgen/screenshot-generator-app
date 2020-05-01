import fs from 'fs';
import puppeteer from 'puppeteer';

function getChromiumExecPath() {
  return puppeteer.executablePath().replace('app.asar', 'app.asar.unpacked');
}

// export async function getPageInfo(url) {
//   let favicon;
//   let title;
//   const browser = await puppeteer.launch({
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//     executablePath: getChromiumExecPath()
//   });
//   const page = await browser.newPage();
//   await page.goto(url);

//   favicon = await page
//     .$eval('link[rel="icon"]', el => el.href)
//     .catch(e => (favicon = ''));
//   if (!favicon) {
//     favicon = await page
//       .$eval('link[rel="shortcut icon"]', el => el.href)
//       .catch(e => (favicon = ''));
//   }
//   title = await page
//     .$eval('title', el => el.textContent)
//     .catch(e => (title = ''));
//   browser.close();
//   const createdAt = new Date();
//   return {
//     title,
//     favicon,
//     url,
//     createdAt
//   };
// }

export async function generateScreenshots(sitemap, devices) {
  // Error login?
  process.on("uncaughtException", error => {
    console.error(error);
    process.exit(1);
  });

  process.on("unhandledRejection", (reason, p) => {
    console.error(reason, p);
    process.exit(1);
  });

  //------------------------------------------------------//
  // Screenshot generator
  //------------------------------------------------------//
  function startGenerating() {
    // sitemap = ['http://studioalloy.nl']; // ⚠️ For testing purposes only

    console.log(
      "🤓  Going to genarte " + sitemap.length * devices.length + "images.",
    );

    (async () => {
      let screenshotDirectory = "/app/output/";
      if (!fs.existsSync(screenshotDirectory)) {
        fs.mkdirSync(screenshotDirectory);
      }

      let browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        executablePath: getChromiumExecPath()
      });

      let page = await browser.newPage();

      for (let i = 0, len = devices.length; i < len; i++) {
        let device = devices[i];

        // Set device options
        await page.setViewport({
          width: device.width,
          height: device.height,
          isMobile: device.mobile,
          hasTouch: device.touch,
          deviceScaleFactor: device.deviceScaleFactor,
        });

        await page.setUserAgent(device.userAgent);

        let deviceDirectory = screenshotDirectory + device.deviceName + "/";
        if (!fs.existsSync(deviceDirectory)) {
          fs.mkdirSync(deviceDirectory);
        }

        for (let j = 0, len = sitemap.length; j < len; j++) {
          let url = sitemap[j];

          console.log("Generating 🖼  for " + device.deviceName + " " + url);

          // Remove domain name from url and set file name
          let convertURL = url;
          convertURL = convertURL.replace(/^.*\/\/[^\/]+/, "");
          convertURL = convertURL.split("/");
          convertURL = convertURL.filter(Boolean);
          convertURL = convertURL.join("_");
          // END Remove domain name from url and set file name
          // let pageSlug = page.url();
          // const pageTitle = await page.title();
          // console.log(pageSlug);
          let imageName = device.width + "-" + convertURL + ".jpg";

          // Load page and create full page screenshot
          await page.goto(url, {
            waitUntil: "networkidle2",
          });
          //------------------------------------------------------//
          // View Height (vw) fix
          //------------------------------------------------------//
          const bodyHandle = await page.$("body");
          const { width, height } = await bodyHandle.boundingBox();
          await page.screenshot({
            path: deviceDirectory + imageName,
            // fullPage: true,
            clip: {
              x: 0,
              y: 0,
              width,
              height,
            },
          });
          //------------------------------------------------------//
          // END View Height (vw) fix
          //------------------------------------------------------//
        }
      }
      console.log(
        "✅  Should have generated " +
        sitemap.length * devices.length +
        "images.",
      );

      await browser.close();
    })();
  }
}