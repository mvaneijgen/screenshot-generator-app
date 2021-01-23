import puppeteer from 'puppeteer-core';

global.share.ipcMain.on('clicktest', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})