
const webdriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

options = new Options()

// options.headless();

const driver = new webdriver.Builder().setChromeOptions(options).forBrowser('chrome').build();

const test = async () => {
        try{
            driver.get('http://ec2-43-207-36-184.ap-northeast-1.compute.amazonaws.com:5051/');
            driver.findElement(webdriver.By.name('email')).sendKeys('');
            driver.findElement(webdriver.By.css('button')).click();
            
            await driver.wait(webdriver.until.elementTextIs(driver.findElement(webdriver.By.id("loginMessage")), "Inval email or password"), 3000);
            let text = await driver.findElement(webdriver.By.id('loginMessage')).getText();
            console.log(text);
           
        }
        catch(err){
            console.log(err);
        }

}


test();
