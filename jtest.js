const { Builder, Capabilities, By, Key, until} = require("selenium-webdriver");
var capabilities = Capabilities.chrome();
(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://10.96.126.83:4444/wd/hub")   
        .withCapabilities(capabilities)
        .build();
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
      console.log('done');
    } finally {
        await driver.quit();
    }
})();  
