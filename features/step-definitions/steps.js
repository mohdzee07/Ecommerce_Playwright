//https://github.com/cucumber/cucumber-js -- refer this link for cucumber details

const { POManager } = require('../../pageobject/POManager');
const { When, Then, Given } = require('@cucumber/cucumber') //import given , when and then
  const {expect} = require('@playwright/test');
  const playwright = require('@playwright/test')// we have added playwright here becuase we need a browser context hance playwright has it


Given('a login to ecommerce application  with {string} and {string}',{timeout: 100*1000}, async  function (username, password) {
  // Write code here that turns the phrase above into concrete actions
   
    const products = this.page.locator(".card-body");
    const loginpage = this.poManger.getLoginPage();
    await loginpage.goto();
    await loginpage.validLogin(username, password);
   
});

When('add {string} to Cart', async function (productName) {
  // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManger.getdashobardPage();
    await this.dashboardPage.searchProduct(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart',async function (productName) {
  // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManger.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout;
});

When('Enter valid details and Place the Order', async function () {
  // Write code here that turns the phrase above into concrete actions
    const orderreviewpage = this.poManger.getOrdersReviewPage();
    await orderreviewpage.searchCountryAndSelect("ind","India")
    const orderid= await orderreviewpage.SubmitAndGetOrderId();
    console.log(orderid)
});

Then('Verfiy order is present in OrderHistoryPage', async function () {
  // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const orderhistorypage= this.poManger.getOrderHistoryPage();
    await orderhistorypage.searchOrderAndSelect(orderid);
});

Given('a login to ecommerce2 application  with {string} and {string}',{timeout: 100*1000}, async  function (username1, password1) {
  // Write code here that turns the phrase above into concrete actions
         await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
           const userName = this.page.locator("#username");
            const signin =this.page.locator("#signInBtn");
           await  userName.fill(username1);
           await  this.page.locator("[name='password']").fill(password1);
          await   signin.click();
});



Then('Verify error message is displayed', async function () {
  // Write code here that turns the phrase above into concrete actions
  console.log(await this.page.locator("[style*='block']").textContent());
    //Assesrtion to verify the substr of the text 
  await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});

