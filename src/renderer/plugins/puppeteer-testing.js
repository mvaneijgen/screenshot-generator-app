const fs = require('fs'); // Write to local file system
const puppeteer = require('puppeteer'); // Control a version of Chrome
const fullPageScreenshot = require("puppeteer-full-page-screenshot");
// import fullPageScreenshot from "puppeteer-full-page-screenshot";

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  await page.goto('https://stackoverflow.com/questions/61057886/puppeteer-whete-or-gray-screenshot');

  // const bodyHandle = await page.$("body");
  // let { width, height } = await bodyHandle.boundingBox();
  // console.warn(height);
  await page.screenshot({
    path: '/Users/mitchelvaneijgen/Downloads/test/screenshot.png',
    fullPage: true,
  });

  console.warn(`did screnshot ${new Date()}`);

  await browser.close();
})();