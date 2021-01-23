const fs = require('fs'); // Write to local file system
import puppeteer from 'puppeteer-core';
const { default: fullPageScreenshot } = require("puppeteer-full-page-screenshot");

// global.share.ipcMain.on('puppeteer', (event, args) => {
global.share.ipcMain.on('puppeteer', async (event, args) => {
  const sitemap = JSON.parse(args[0]);
  const devices = JSON.parse(args[1]);
  const fileStorage = JSON.parse(args[2]);
  const pathChrome = JSON.parse(args[3]);
  console.warn('hello');

  // const browser = await puppeteer.launch({
  //   // headless: false,
  //   args: ['--no-sandbox', '--disable-setuid-sandbox'],
  //   executablePath: pathChrome
  // });
  // const page = await browser.newPage();
  // await page.goto("https://mvaneijgen.nl");
  // await page.screenshot({ path: `${fileStorage}/banaan-apple1202.png` });

  // (async () => {

  const browser = await puppeteer.launch(
    {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // executablePath: getChromiumExecPath()
      executablePath: pathChrome
    }
  );
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

    let deviceDirectory = `${fileStorage}/${device.deviceName.replace(/\//g, '-')}/`;

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

      // await page.screenshot({
      //   path: deviceDirectory + imageName,
      //   type: 'jpeg',
      //   quality: 60,
      //   fullPage: true,
      // });

      // const bodyHandle = await page.$("body");
      // const { width, height } = await bodyHandle.boundingBox();
      // await page.screenshot({
      //   path: deviceDirectory + imageName,
      //   // fullPage: true,
      //   clip: {
      //     x: 0,
      //     y: 0,
      //     width,
      //     height,
      //   },
      // });
      // await page.evaluate(() => {
      //   // dom.innerHTML = "change to something"
      //   let stickyElements = [...document.body.getElementsByTagName("*")].filter(
      //     x => ['fixed', 'sticky'].includes(getComputedStyle(x, null).getPropertyValue("position"))
      //   );
      //   stickyElements.style.display = "none";
      // });

      await fullPageScreenshot(page, {
        path: deviceDirectory + imageName,
        type: 'jpeg',
        quality: 60,
      });
    }
  }
  console.warn(`✅  Should have generated ${sitemap.length * devices.length} images.`);

  await browser.close();
  // })

})