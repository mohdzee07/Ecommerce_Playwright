const {test,expect} = require ('@playwright/test')

const baseurl ="https://eventhub.rahulshettyacademy.com";

const GMAIL_USER ={email: 'mohdzee1414@gmail.com', password:'Mehu@123'}

async function logingotobooking(page){
    await page.goto(`${baseurl}/login`);
    await page.locator("#email").fill("mohdzee1414@gmail.com");
    await page.locator("#password").fill("Mehu@123");
    await page.getByRole("button", {name: 'Sign In'}).click();

    await expect(page.getByRole("link", {name: "Browse Events →"})).toBeVisible();
}

test("Ticketrefund", async({page})=>
    
{
  //Step1
  await logingotobooking(page);

//Step2
 await page.goto(`${baseurl}/events`);
await page.locator("#event-card").first().locator("#book-now-btn").click();


//step3-fill form
  await page.locator("#customerName").fill("Zeehsan");
   await page.locator("#customer-email").fill("mohdzee1414@gmail.com");
   await page.locator("#phone").fill("8892433674");

   await page.locator("#confirm-booking").click();

 await page.getByRole("button", {name: "View My Bookings"}).click();

 await expect(page).toHaveURL(`${baseurl}/bookings`);


 //step4

 await page.locator("#booking-card").first().getByRole("button", {name: "View Details"}).click();


  const bookingid = await page.locator(".font-mono.font-bold").innerText();
  const titlehead = await page.locator("h1").innerText();
   await expect(bookingid.charAt(0)).toBe(titlehead.charAt(0));

   await page.locator("#check-refund-btn").click();

   await expect(page.locator("#refund-spinner")).toBeVisible();

   //await expect(page.locator("#refund-spinner")).not.toBeVisible({timeout: 6000});

   await page.locator("#refund-result").toBeVisible();
});