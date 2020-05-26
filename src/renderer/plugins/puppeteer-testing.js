// ! Test if this is invoked 
console.warn('invoked puppeteer.js 🎉');
console.log(process.argv);
const fs = require('fs'); // Write to local file system
const puppeteer = require('puppeteer'); // Control a version of Chrome

(async () => {
  // // let fileStorage = "/app/output/";
  // if (!fs.existsSync(fileStorage)) {
  //   fs.mkdirSync(fileStorage);
  // }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://buddy.works');
  await page.screenshot({ path: '/Users/mitchelvaneijgen/Downloads/buddy-screenshot.png' });

  await browser.close();
})();
