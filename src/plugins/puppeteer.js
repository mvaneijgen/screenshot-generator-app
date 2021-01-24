const fs = require('fs'); // Write to local file system
import puppeteer from 'puppeteer-core';

global.share.ipcMain.on('puppeteer', async (event, args) => {
  const sitemap = JSON.parse(args[0]);
  const devices = JSON.parse(args[1]);
  const fileStorage = JSON.parse(args[2]);
  const pathChrome = JSON.parse(args[3]);

  const browser = await puppeteer.launch(
    {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
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

      await page.evaluate(() => {
        const main = document.querySelector('main');
        if (main) {
          main.style.minHeight = "auto";
        }
        const header = document.querySelector('section.homepage-slider');
        if (header) {
          header.style.marginBottom = 0;
          header.style.height = '400px';
        }
      });

      await page.screenshot({
        path: deviceDirectory + imageName,
        type: 'jpeg',
        quality: 60,
        fullPage: true,
      });

    }
  }
  console.warn(`✅  Should have generated ${sitemap.length * devices.length} images.`);

  await browser.close();

})