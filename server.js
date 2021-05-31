const express = require('express');
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder()
  .withCapabilities({
    'goog:chromeOptions': {
//       // Here is the path to your Electron binary.
      binary: "C:\\Users\\stu\\AppData\\Local\\slack\\slack.exe"
    }
  }).forBrowser('chrome').build();
  // await driver.findElement(By.xpath('//*[@id="page_contents"]/div/div/div[2]/a'))
  await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//*[@id="page_contents"]/div/div/div[2]/a'))),5000).click()

  await driver.quit();
  
})();





const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})




