const { test, expect } = require("@playwright/test")
const { POManager } = require('../pageobject/POManager');
const { Customtest } =require('../utils/test-data');

//json converted to ->string converted to ->js object
//here we convert JSON to string using json.stringfy and then to JS onject by using parse
const dataSet = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));


for(const data of dataSet)
{

test(`Client app login for ${data.productName}`, async ({ page }) => 
    
    {

    const poManger = new POManager(page)
   // const products = page.locator(".card-body");
    const loginpage = poManger.getLoginPage();
    await loginpage.goto();
    await loginpage.validLogin(data.username, data.password);
    const dashboardPage = poManger.getdashobardPage();
    await dashboardPage.searchProduct(data.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManger.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout;
   
    const orderreviewpage = poManger.getOrdersReviewPage();
    await orderreviewpage.searchCountryAndSelect("ind","India")
    //await orderreviewpage.VerifyEmailId(username);
    const orderid= await orderreviewpage.SubmitAndGetOrderId();
    console.log(orderid)

     await dashboardPage.navigateToOrders();
     
    const orderhistorypage= poManger.getOrderHistoryPage();
    await orderhistorypage.searchOrderAndSelect(orderid);



});
}


Customtest.only('Client app login for', async ({ page, testDataforOrder }) => 
    
    {

    const poManger = new POManager(page)
    const products = page.locator(".card-body");
    const loginpage = poManger.getLoginPage();
    await loginpage.goto();
    await loginpage.validLogin(testDataforOrder.username, testDataforOrder.password);
    const dashboardPage = poManger.getdashobardPage();
    await dashboardPage.searchProduct(testDataforOrder.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManger.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataforOrder.productName);
    await cartPage.Checkout;

    });