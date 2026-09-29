import { clear } from "node:console";
import{expect, type Locator,type Page} from '@playwright/test'

//datatype, annotations
 let message :string = "zeeshan";
message = "shan";
console.log(message)

let age:number = 22;
console.log(age)
let isActive:boolean =true;

let numArray : number[] =[1,2,3,4];

//when we are unuser about dataytype put "any" duting complie time it will select the datatype

let data : any = "defin anything";
data =42;//we can intilaize anything as we have given any keyword

//**************Functions************

function add (a:number,b:number) :number
{
     return a+b;
}

let sum:number = add(2,3);

console.log(sum);

//creating an object and declaring it

let user : {name:string, age:number,location:string} = {name:"zee", age:19, location:"blore"}


//class
//everything should have a return type in 

class CartPage
{
    
page: Page;
cartProducts:Locator;
productsText:Locator;
cart:Locator;
orders:Locator;
checkout:Locator

constructor(page:any)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout"); 

}

}