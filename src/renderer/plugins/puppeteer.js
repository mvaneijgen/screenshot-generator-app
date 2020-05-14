console.warn('banaan');

const fs = require('fs');
const puppeteer = require('puppeteer');
// // import fs from 'fs';
// // import puppeteer from 'puppeteer';
//   process.on("uncaughtException", error => {
//     console.error(error);
//     process.exit(1);
//   });

//   process.on("unhandledRejection", (reason, p) => {
//     console.error(reason, p);
//     process.exit(1);
//   });

//   //------------------------------------------------------//
//   // Screenshot generator
//   //------------------------------------------------------//
//   function startGenerating() {
//     // sitemap = ['http://studioalloy.nl']; // ⚠️ For testing purposes only

//     console.log(
//       "🤓  Going to genarte " + sitemap.length * devices.length + "images.",
//     );

//     (async () => {
//       // let fileStorage = "/app/output/";
//       if (!fs.existsSync(fileStorage)) {
//         fs.mkdirSync(fileStorage);
//       }

//       let browser = await puppeteer.launch({
//         args: ["--no-sandbox", "--disable-setuid-sandbox"],
//         executablePath: getChromiumExecPath()
//       });

//       await browser.connect({
//         browserWSEndpoint: 'node_modules/puppeteer/.local-chromium/**/*'
//       });

//       let page = await browser.newPage();

//       for (let i = 0, len = devices.length; i < len; i++) {
//         let device = devices[i];

//         // Set device options
//         await page.setViewport({
//           width: device.width,
//           height: device.height,
//           isMobile: device.mobile,
//           hasTouch: device.touch,
//           deviceScaleFactor: device.deviceScaleFactor,
//         });

//         await page.setUserAgent(device.userAgent);

//         let deviceDirectory = fileStorage + device.deviceName + "/";
//         if (!fs.existsSync(deviceDirectory)) {
//           fs.mkdirSync(deviceDirectory);
//         }

//         for (let j = 0, len = sitemap.length; j < len; j++) {
//           let url = sitemap[j];

//           console.log("Generating 🖼  for " + device.deviceName + " " + url);

//           // Remove domain name from url and set file name
//           let convertURL = url;
//           convertURL = convertURL.replace(/^.*\/\/[^\/]+/, "");
//           convertURL = convertURL.split("/");
//           convertURL = convertURL.filter(Boolean);
//           convertURL = convertURL.join("_");
//           // END Remove domain name from url and set file name
//           // let pageSlug = page.url();
//           // const pageTitle = await page.title();
//           // console.log(pageSlug);
//           let imageName = device.width + "-" + convertURL + ".jpg";

//           // Load page and create full page screenshot
//           await page.goto(url, {
//             waitUntil: "networkidle2",
//           });
//           //------------------------------------------------------//
//           // View Height (vw) fix
//           //------------------------------------------------------//
//           const bodyHandle = await page.$("body");
//           const { width, height } = await bodyHandle.boundingBox();
//           await page.screenshot({
//             path: deviceDirectory + imageName,
//             // fullPage: true,
//             clip: {
//               x: 0,
//               y: 0,
//               width,
//               height,
//             },
//           });
//           //------------------------------------------------------//
//           // END View Height (vw) fix
//           //------------------------------------------------------//
//         }
//       }
//       console.log(
//         "✅  Should have generated " +
//         sitemap.length * devices.length +
//         "images.",
//       );

//       await browser.close();
//     })();
//   }


// async function generateScreenshots(sitemap, devices, fileStorage) {
//   const fs = require('fs');
//   const puppeteer = require('puppeteer');
  //   // Error?
  //   process.on("uncaughtException", error => {
  //     console.error(error);
  //     process.exit(1);
  //   });

  //   process.on("unhandledRejection", (reason, p) => {
  //     console.error(reason, p);
  //     process.exit(1);
  //   });

  //   //------------------------------------------------------//
  //   // Screenshot generator
  //   //------------------------------------------------------//
  //   function startGenerating() {
  //     // sitemap = ['http://studioalloy.nl']; // ⚠️ For testing purposes only

  //     console.log(
  //       "🤓  Going to genarte " + sitemap.length * devices.length + "images.",
  //     );

  //     (async () => {
  //       // let fileStorage = "/app/output/";
  //       if (!fs.existsSync(fileStorage)) {
  //         fs.mkdirSync(fileStorage);
  //       }

  //       let browser = await puppeteer.launch({
  //         args: ["--no-sandbox", "--disable-setuid-sandbox"],
  //         executablePath: getChromiumExecPath()
  //       });

  //       await browser.connect({
  //         browserWSEndpoint: 'node_modules/puppeteer/.local-chromium/**/*'
  //       });

  //       let page = await browser.newPage();

  //       for (let i = 0, len = devices.length; i < len; i++) {
  //         let device = devices[i];

  //         // Set device options
  //         await page.setViewport({
  //           width: device.width,
  //           height: device.height,
  //           isMobile: device.mobile,
  //           hasTouch: device.touch,
  //           deviceScaleFactor: device.deviceScaleFactor,
  //         });

  //         await page.setUserAgent(device.userAgent);

  //         let deviceDirectory = fileStorage + device.deviceName + "/";
  //         if (!fs.existsSync(deviceDirectory)) {
  //           fs.mkdirSync(deviceDirectory);
  //         }

  //         for (let j = 0, len = sitemap.length; j < len; j++) {
  //           let url = sitemap[j];

  //           console.log("Generating 🖼  for " + device.deviceName + " " + url);

  //           // Remove domain name from url and set file name
  //           let convertURL = url;
  //           convertURL = convertURL.replace(/^.*\/\/[^\/]+/, "");
  //           convertURL = convertURL.split("/");
  //           convertURL = convertURL.filter(Boolean);
  //           convertURL = convertURL.join("_");
  //           // END Remove domain name from url and set file name
  //           // let pageSlug = page.url();
  //           // const pageTitle = await page.title();
  //           // console.log(pageSlug);
  //           let imageName = device.width + "-" + convertURL + ".jpg";

  //           // Load page and create full page screenshot
  //           await page.goto(url, {
  //             waitUntil: "networkidle2",
  //           });
  //           //------------------------------------------------------//
  //           // View Height (vw) fix
  //           //------------------------------------------------------//
  //           const bodyHandle = await page.$("body");
  //           const { width, height } = await bodyHandle.boundingBox();
  //           await page.screenshot({
  //             path: deviceDirectory + imageName,
  //             // fullPage: true,
  //             clip: {
  //               x: 0,
  //               y: 0,
  //               width,
  //               height,
  //             },
  //           });
  //           //------------------------------------------------------//
  //           // END View Height (vw) fix
  //           //------------------------------------------------------//
  //         }
  //       }
  //       console.log(
  //         "✅  Should have generated " +
  //         sitemap.length * devices.length +
  //         "images.",
  //       );

  //       await browser.close();
  //     })();
  //   }
// }
// module.exports = generateScreenshots; // Changed line