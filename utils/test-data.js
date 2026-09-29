const base =require("@playwright/test")


exports.Customtest = base.test.extend(
{
 testDataforOrder:{
username: "mehu1414@gmail.com",
password : "Mehu@123",
productName : "ZARA COAT 3"

}
}
)