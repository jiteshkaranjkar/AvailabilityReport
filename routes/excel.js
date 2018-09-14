const express = require('express');
const router  = express.Router();
const XLSX    = require('xlsx');
const fs      = require("fs");


var avalabilityReportFileName = "National Availability.xlsx";
var sheetNameAR = "Excel Export_1";
var scheduledUtilizationFileName = "Scheduled Utilisation by OU Next 6 Months.xlsx";
var sheetNameSU = "Page1_1"; 

router.get('/util/', function(req, res, next) {
    let data = getExcelData(scheduledUtilizationFileName, sheetNameSU);
    res.send({ data})
});
router.get('/report/', function(req, res, next) {
    let data = getExcelData(avalabilityReportFileName, sheetNameAR);
    res.send({ data})
});

  var getExcelData = function(fileName, sheetName){ 
  var workbook = XLSX.readFile('C:/JK/AvailabilityReport/' +  fileName); 
  var sheet_name_list = workbook.SheetNames;
  //sheet_name_list.map(info=>console.log(...info));     

  var worksheet = workbook.Sheets[sheetName];
  var headers = {};
  var data = [];
    // console.log("Excel Function 1 - ", fileName + " ---  " + sheetName);
  for(z in worksheet) {
      if(z[0] === '!') continue;
      //parse out the column, row, and value
      var tt = 0;
        //console.log("Excel Function 2 - ", z);
      for (var i = 0; i < z.length; i++) {
          if (!isNaN(z[i])) {
              tt = i;
              break;
          }
      };
      var col = z.substring(0,tt);
      var row = parseInt(z.substring(tt));
      var value = worksheet[z].v;
      //console.log("Excel Function 3 - ", value);

      //store header names
      if(row == 1 && value) {
          headers[col] = value;
          continue;
      }

      if(!data[row]) data[row]={};
      data[row][headers[col]] = value;
  }
    //drop those first two rows which are empty
    data.shift();
    //console.log(data);
    return data;
}
module.exports = router;
//Commented Excel #endregion

// function to_json(workbook) {
//     console.log("Excel Function 1 - ", value);
//     var result = {};
//     workbook.SheetNames.forEach(function(sheetName) {
//       var roa = XLS.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//       if(roa.length > 0){
//         result[sheetName] = roa;
//       }
//     });
//     return result;
//   }


// let getExcelData = function(value){
//     debugger;
//   var url = 'C:/JK/AvailabilityReport/' +  fileName;
//   var oReq = new XMLHttpRequest();
//   console.log("Excel Function JK 1- ", value);
//   oReq.open("GET", url, true);
//   console.log("Excel Function JK 2- ", value);
//   oReq.responseType = "arraybuffer";

//   oReq.onload = function(){
//     console.log("Excel Function JK 3- ", value);
//     var arraybuffer = oReq.response;
//     var data = new Uint8Array(arraybuffer);
//     var arr = new Array();
//     for(var i = 0; i != data.length; i++) arr[i] = String.fromCharCode(data[i]);
//     var bstr = arr.join("");
//     var workbook = XLSX.read(bstr, {type:"binary"}); 
    
//     console.log(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[sheetName]]));
    
//   }
//#endregion