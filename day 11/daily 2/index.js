const XLSX = require("xlsx");
const workbook = XLSX.readFile("employe.xlsx");// to read xlsx file
let worksheets = {};
for (const sheetName of workbook.SheetNames) {
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

let arr = worksheets.Sheet
for(let i = 0; i < worksheets.Sheet.length; i++){

  if (arr[i].AnnualSalary < 50000){
    Object.assign(arr[i],{BonusPercentage:'5%'})//in arrays we use arr.push() 
    Object.assign(arr[i],{BonusAmount: (5*arr[i].AnnualSalary)/100})
  }
  else if (arr[i].AnnualSalary >= 50000 && arr[i].AnnualSalary <= 100000) {
    Object.assign(arr[i],{BonusPercentage:'7%'})
    Object.assign(arr[i],{BonusAmount: (7*arr[i].AnnualSalary)/100})
  }
  else{
    Object.assign(arr[i],{BonusPercentage:'10%'})
    Object.assign(arr[i],{BonusAmount: (10*arr[i].AnnualSalary)/100})
  }
  console.log(arr[i])

}
//error message
try {
const ws = XLSX.utils.json_to_sheet(arr);//reforamt data type from json to sheet
const wb = XLSX.utils.book_new();// create new file xlsx
XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');// add sheet to file

XLSX.writeFile(wb, 'Bonuses.xlsx');// name of the file
} 
catch (error) {
  console.log(error.message);

}