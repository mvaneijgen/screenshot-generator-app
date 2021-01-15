console.warn('banaan');
const { BrowserWindow, app } = require("electron");
const fs = require('fs'); // Write to local file system
const pie = require("puppeteer-in-electron");
const puppeteer = require('puppeteer-core'); // Control a version of Chrome
// const puppeteer = require('puppeteer-core'); // Control a version of Chrome
const { default: fullPageScreenshot } = require("puppeteer-full-page-screenshot");
// const fullPageScreenshot = require("puppeteer-full-page-screenshot");
// import fullPageScreenshot from "puppeteer-full-page-screenshot";
const args = process.argv;
const sitemap = JSON.parse(args[2]);
const devices = JSON.parse(args[3]);
const fileStorage = JSON.parse(args[4]);
const pathChrome = JSON.parse(args[5]);

// function getChromiumExecPath() {
//   return puppeteer.executablePath().replace('app.asar', 'app.asar.unpacked');
// }

console.warn(app);
const main = async () => {
  await pie.initialize(app);
  const browser = await pie.connect(app, puppeteer);

  const window = new BrowserWindow();
  const url = "https://mvaneijgen.nl/";
  await window.loadURL(url);

  const page = await pie.getPage(browser, window);
  console.log(page.url());
  window.destroy();
};

main();