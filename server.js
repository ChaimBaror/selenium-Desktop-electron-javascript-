const express = require('express');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder()
//   .usingServer('http://localhost:9515')
  .withCapabilities({
//     'goog:chromeOptions': {
//       // Here is the path to your Electron binary.
      binary: 'C:/Users/chaim baror/AppData/Local/slack/slack.exe'
//     }
  })
  .forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 3000);
  } finally {
    await driver.quit();
  }
})();





const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})




