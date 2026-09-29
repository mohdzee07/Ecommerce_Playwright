//const { DashboardPage } = require("./DashboardPage");
import{DashboardPage} from "./DashboardPage";
//const { LoginPage } = require("./LoginPage");
import{LoginPage} from "./LoginPage";
//const {CartPage} = require("./CartPage");
import {CartPage} from "./CartPage";
//const {OrdersHistoryPage} = require("./OrdersHistoryPage");
import { OrdersHistoryPage } from "./OrdersHistoryPage"; 
//const {OrdersReviewPage} = require("./OrdersReviewPage");
import{OrdersReviewPage} from "./OrdersReviewPage";

import { type Page } from "@playwright/test";

export class POManager
{
  
    page:Page;
    loginPage:LoginPage; //Here type is class object hence Loginpage is passed as type it is not a string or number
    dashboardPage:DashboardPage;
    cartPage:CartPage;
    orderHistoryPage:OrdersHistoryPage;
    orderReviewPage:OrdersReviewPage;

    constructor(page:any)
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