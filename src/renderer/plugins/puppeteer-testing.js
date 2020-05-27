const fs = require('fs'); // Write to local file system
const puppeteer = require('puppeteer'); // Control a version of Chrome

const args = process.argv;
const sitemap = JSON.parse(args[2]);
const devices = JSON.parse(args[3]);
const fileStorage = JSON.parse(args[4]);

(async () => {

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  // await page.goto('https://buddy.works');
  // await page.screenshot({ path: '/Users/mitchelvaneijgen/Downloads/buddy-screenshot.png' });

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

    // let deviceDirectory = fileStorage + device.deviceName + "/";
    let deviceDirectory = `${fileStorage}/${device.deviceName}/`;

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
  // console.log(
  //   
  //    +
  //   "",
  // );
  console.warn(`✅  Should have generated ${sitemap.length * devices.length} images.`);

  await browser.close();

})();
