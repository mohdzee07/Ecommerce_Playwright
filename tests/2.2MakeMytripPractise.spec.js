 const {test, expect}=  require('@playwright/test')

const baseurl = "https://eventhub.rahulshettyacademy.com"

test("MakeMyTrip", async({page})=>
{
  

    
     await page.goto(`${baseurl}/login`);

    
    await page.locator("#email").fill("mohdzee1414@gmail.com");
    await page.locator("#password").fill("Mehu@123");
    await page.getByRole("button", {name: 'Sign In'}).click();
   
   await expect(page.getByRole('link', {name: 'Browse Events →'})).toBeVisible();
   //await page.getByRole("button", {name:'Admin'}).click();


   await page.goto(`${baseurl}/admin/events`);

   const eventTitle = `Test Event ${Date.now()}`;

   await page.locator("#event-title-input").fill(eventTitle);

   await page.getByPlaceholder("Describe the event…").fill("Text testing");

   await page.getByLabel("city").fill("Bangalore");

   await page.getByPlaceholder("Venue name & address").fill("2nd apt,lavello road");

   await page.getByLabel('Event Date & Time').fill('2027-12-31T10:00');

   await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill("100");

   await  page.locator("#total-seats").fill("5");

   await page.getByRole("button", {name: '+ Add Event'}).click();

   await expect(page.locator(".pointer-events-none")).toBeVisible();

   console.log(`Created Event: "${eventTitle}"`)

   await page.goto(`${baseurl}/events`);

   const eventcards = await page.getByTestId("event-card")

   //assert the firdst card

   await expect(eventcards.first()).toBeVisible();

   const finalcard = await eventcards.filter({hasText: eventTitle}).first();

   await expect(finalcard).toBeVisible({timeout: 5000});

   //capture seats before booking

   const seatscounts= await  finalcard.getByText("seat").first().textContent();
   console.log(`Seats before booking : ${seatscounts}`);
  

   //click on boo now

   const bookbutton = await finalcard.locator("#book-now-btn").click();


   //await  page.getbytext("+").click();

   await page.locator("#customerName").fill("Zeehsan");
   await page.locator("#customer-email").fill("mohdzee1414@gmail.com");
   await page.locator("#phone").fill("8892433674");

   await page.locator("#confirm-booking").click();



   const bookingno = await page.locator(".booking-ref").first()

   await expect(bookingno).toBeVisible();

  
    
   const bookingnofinal = (await bookingno.innerText()).trim();

   console.log(bookingnofinal);



   //View bookings

   await page.getByRole("link", {name: 'View My Bookings'}).click();


   await expect(page).toHaveURL(`${baseurl}/bookings`);
  



   const cardno = await page.locator("#booking-card").first();

   const matchingcard = await cardno.filter({hasText : bookingnofinal});
   await expect(matchingcard).toBeVisible();

   await expect(matchingcard).toContainText(eventTitle)


//    //select the created id
//     await page.locator("tbody").waitFor();
//     const orderidrow = await page.locator("tbody tr")
//      //const rowlenth = await rowid.count();

//      for(let i=0; i<await orderidrow.count; i++)
//      {
//         const finalid = await orderidrow.nth(i).locator("tr").textContent();
//         console.log(finalid)
//         if(eventTitle.includes(finalid)){
//           const finalclick=  await orderidrow.nth(i).locator("#delete-event-btn").click();
//            console.log(finalclick);
//            break;
//         }
//      }


   
   

  

   
   

  
    




});