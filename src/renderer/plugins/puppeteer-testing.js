const fs = require('fs'); // Write to local file system
const puppeteer = require('puppeteer'); // Control a version of Chrome
const fullPageScreenshot = require("puppeteer-full-page-screenshot");
// import fullPageScreenshot from "puppeteer-full-page-screenshot";

const args = process.argv;
const sitemap = JSON.parse(args[2]);
const devices = JSON.parse(args[3]);
const fileStorage = JSON.parse(args[4]);

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

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
      let imageName = device.width + "-" + convertURL + ".jpg";

      await page.goto(url, {
        waitUntil: "networkidle2",
      });

      //------------------------------------------------------//
      // View Height (vh) fix 
      // 📝 Not working screenshot is white from the under the fold
      //------------------------------------------------------//
      const bodyHandle = await page.$("body");
      let { width, height } = await bodyHandle.boundingBox();
      height = parseInt(height);
      console.warn(height);
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
      // END View Height (vw) fix -------------------------------------//

      //------------------------------------------------------//
      // Other clip solution https://github.com/puppeteer/puppeteer/issues/1273
      // 📝 Not working screenshot is white from the under the fold
      //------------------------------------------------------//
      // let [height, width] = await page.evaluate(() => {
      //   return [
      //     document.getElementsByTagName('html')[0].offsetHeight,
      //     document.getElementsByTagName('html')[0].offsetWidth
      //   ]
      // })

      // await page.screenshot({
      //   path: deviceDirectory + imageName,
      //   clip: { x: 0, y: 0, width, height }
      // })
      // END Other clip solution  -------------------------------------//

      //------------------------------------------------------//
      // fullPageScreenshot npm module 
      // 📝 Error fullPageScreenshot is not a function
      //------------------------------------------------------//
      // await fullPageScreenshot(page, { path: deviceDirectory + imageName });
      // END fullPageScreenshot npm module -------------------------------------//

    }
  }
  console.warn(`✅  Should have generated ${sitemap.length * devices.length} images.`);

  await browser.close();

})();
