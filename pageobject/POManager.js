const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");
const {CartPage} = require("./CartPage");
const {OrdersHistoryPage} = require("./OrdersHistoryPage");
const {OrdersReviewPage} = require("./OrdersReviewPage");

class POManager
{


    constructor(page)
    {

         this.page = page;
         this.loginPage = new LoginPage(this.page);
         this.dashboardPage = new DashboardPage(this.page);
         this.cartPage = new CartPage(this.page);
         this.orderHistoryPage = new OrdersHistoryPage(this.page);
         this.orderReviewPage = new OrdersReviewPage(this.page);
         
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getdashobardPage()
    {
        return this.dashboardPage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getOrderHistoryPage()
    {
        return this.orderHistoryPage;
    }

   getOrdersReviewPage()
   {
    return this.orderReviewPage;
   }
 
    



}

module.exports={POManager};