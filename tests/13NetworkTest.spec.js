const {test, expect, request} = require('@playwright/test');
const {APiUtils} = require('../utils/1APIUtils');
const loginPayLoad = {userEmail:"mehu1414@gmail.com",userPassword:"Mehu@123"};
const orderPayLoad = {orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]};
const fakepayload = {data:[],message:"No Orders"}; //this payload is in JS format and we will convert it into JSON format before sending it to the browser  

 
 
let response;
test.beforeAll( async()=>
{
   const apiContext = await request.newContext({ignoreHTTPSErrors: true});
   const apiUtils = new APiUtils(apiContext,loginPayLoad);
   response =  await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('@API Place the order', async ({page})=>
{ 
    await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );
await page.goto("https://rahulshettyacademy.com/client");


//route to create a new fake api and sent it to the browser

await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", async route => {


           const response =   await page.request.fetch(route.request());// this is used to make apirequest call to the original api and get the response and then we can modify the response and send it to the browser
              //fetch isused to fetch the reponse of the API call made

             // let body = JSON.stringify(fakepayload);//CPnverth the fakepayload into JSOn format because the response of the API call is in JSON format and we need to send the response in JSON format to the browser      
                                                     // this is the fake response which we want to send to the browser

             await  route.fulfill( // fulfill method is used to send the response to the browser after modifying the response of the API call made


                {
                          
                         response,
                         body: JSON.stringify(fakepayload),//stringfy is used to convert JS format into JSON fromat
  //mentioning body explicitly because the key and value are same if we have different key and value then we can mention it like body:body    
                                //it will override the body if route is called and send the fake response to the browser

                }
              );
              //intercepting the response and modifying the response-- API response--{Playwright fake response}-->browser
              
              
            });
           
 await page.locator("button[routerlink*='myorders']").click();

 //this await is used to wait for the respinse to be fecthced
 await  page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"); // this is used to wait for the response of the API call made and then we can perform the assertion after getting the response of the API call made
  console.log(await page.locator(".mt-4").textContent());

});
 

