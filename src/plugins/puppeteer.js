const fs = require('fs'); // Write to local file system
import puppeteer from 'puppeteer-core';

global.share.ipcMain.on('puppeteer', async (event, args) => {
  // Get args and split them up
  const sitemap = JSON.parse(args[0]);
  const devices = JSON.parse(args[1]);
  const fileStorage = JSON.parse(args[2]);
  const pathChrome = JSON.parse(args[3]);
  const customCSS = JSON.parse(args[4]);
  const quality = JSON.parse(args[5]);

  // Envoke Puppeteer
  const browser = await puppeteer.launch(
    {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: pathChrome
    }
  );

  const page = await browser.newPage();

  // Loop through all 💻️ devices in the list
  for (let i = 0, len = devices.length; i < len; i++) {

    let device = devices[i];

    // Set 💻️ devices options
    await page.setViewport({
      width: device.width,
      height: device.height,
      isMobile: device.mobile,
      hasTouch: device.touch,
      deviceScaleFactor: device.deviceScaleFactor,
    });

    await page.setUserAgent(device.userAgent);

    // Create 📂 folder structure
    let deviceDirectory = `${fileStorage}/${device.deviceName.replace(/\//g, '-')}/`;

    if (!fs.existsSync(deviceDirectory)) {
      fs.mkdirSync(deviceDirectory);
    }

    // Loop through all the URLs in the sitemap
    for (let j = 0, len = sitemap.length; j < len; j++) {

      let url = sitemap[j];

      // Log process to the console 
      let process = "Generating 🖼  for " + device.deviceName + " " + url;
      console.log(process);
      event.sender.send('process', [
        device.deviceName,
        url,
        false
      ]);

      // Remove domain name from url and set file name
      let convertURL = url;
      convertURL = convertURL.replace(/^.*\/\/[^\/]+/, "");
      convertURL = convertURL.split("/");
      convertURL = convertURL.filter(Boolean);
      convertURL = convertURL.join("_");
      let imageName = device.width + "-" + convertURL + ".jpg";

      //------------------------------------------------------//
      // Take a 📸 screenshot 
      //------------------------------------------------------//
      await page.goto(url, {
        waitUntil: "networkidle2",
      });
      //  Inject custom 🎨 CSS to page 
      await page.evaluate(({ customCSS }) => {

        const head = document.head;
        const style = document.createElement('style');
        head.appendChild(style);

        if (style.styleSheet) {
          style.styleSheet.cssText = customCSS;
        } else {
          style.appendChild(document.createTextNode(customCSS));
        }

      }, { customCSS });


      await page.screenshot({
        path: deviceDirectory + imageName,
        type: 'jpeg',
        quality: Number(quality),
        fullPage: true,
      });
      // END Take a 📸 screenshot -------------------------------------//


    }
  }
  console.warn(`✅  Should have generated ${sitemap.length * devices.length} images.`);
  event.sender.send('process', [
    'device.deviceName',
    'url',
    true
  ]);
  // event.sender.send('done', true);
  await browser.close();

})