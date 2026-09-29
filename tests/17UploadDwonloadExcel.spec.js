const ExcelJS = require("exceljs");
const {test,expect} = require("@playwright/test")

const workbook = new ExcelJS.Workbook();
   

async function writeExcel(searchText,replaceText,change,filepath) {

    
    //since the execl take time aso weuse await method to read the file and then we can access the data
    await workbook.xlsx.readFile(filepath);
    const worksheet = await workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet,searchText);

    //to write/overwrite  data in excel we can use the below code

     const cell = worksheet.getCell(output.row, output.column+change.columnChange);
     cell.value =  replaceText;
     await workbook.xlsx.writeFile();
}


async function readExcel(worksheet, searchText)
{

    let output = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber) => 
    {
        row.eachCell((cell, columnNumber) => 
        {
            if(cell.value === searchText)

                {
                    output.row = rowNumber;
                    output.column = columnNumber;
                }
        })
    })
  return output;
}

//writeexecl has finding text, replacement text and file path as parameters
//writeExcel("Kivi","Cat","C:\\Users\\AF17PZZ\\Downloads\\excelworkbook.xlsx");

//Write execl to change the price of Orange
//ColChage:2 means it moves 2 columns ahead to fetch the Price

//writeExcel("Kivi",350,{rowChange:0 , columnChange:2},"C:\\Users\\AF17PZZ\\Downloads\\Excel.xlsx")

test('Upload download excel validations',async ({page})=>
{

   await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
   //this step is to make sure downlaod is complete
   const downlaodPromise = page.waitForEvent('download');
   await page.getByRole('button', { name: 'Download' }).click();
   await downlaodPromise;
   writeExcel("Mango",350,{rowChange:0 , columnChange:2},"C:\\Users\\AF17PZZ\\Downloads\\download.xlsx")
   await page.locator("#fileinput").click();
   await page.locator("#fileinput").setInputFiles("C:\\Users\\AF17PZZ\\Downloads\\download.xlsx")

})