import{test as baseTest}  from "@playwright/test"
import { Interface } from "node:readline";

interface TestDataforOrder {
    username: string;
    password: string;
    productName: string;
};
export const Customtest = baseTest.extend<{testDataforOrder:TestDataforOrder}>(
{
 testDataforOrder:{
username: "mehu1414@gmail.com",
password : "Mehu@123",
productName : "ZARA COAT 3"

}
}
)