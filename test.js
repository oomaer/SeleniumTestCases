
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const { Options } = require('selenium-webdriver/chrome');

options = new Options()
// options.headless();

const driver = new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();

describe('Show Error Message on Empty Input', () => {
    it('should show error message', async () => {
        
            driver.get('http://ec2-43-207-36-184.ap-northeast-1.compute.amazonaws.com:5051/');
            driver.findElement(webdriver.By.name('email')).sendKeys('');
            driver.findElement(webdriver.By.css('button')).click();
            
            //wait for 3 seconds if error message is not shown
            await driver.wait(webdriver.until.elementTextIs(driver.findElement(webdriver.By.id("loginMessage")), "Invalid email or password"), 4000);
            let text = await driver.findElement(webdriver.By.id('loginMessage')).getText();
            assert("hello", "Invalid email or password");
            driver.quit();
    });
})
