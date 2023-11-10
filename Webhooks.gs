//google script webhook function

function doPost(e) {

    var jsonString = e.postData.getDataAsString();
    var eventData = JSON.parse(jsonString)
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet2");
    var timeStamp = new Date();
    var time = Utilities.formatDate(timeStamp, "GMT+01:00", "MM/dd/yy, h:mm a");
    var lastRow = sheet.getLastRow();
    var getHookType = eventData["event"];
    
    if (getHookType === "charge.success") {
      var hookType = "Payment Successful";
      var customerEmail = eventData["data"].customer.email;
      var customerReference = eventData["data"].reference;
      var customerAmount = eventData["data"].amount;
      var firstName = eventData["data"].metadata.custom_fields[0].value;
      var lastName = eventData["data"].metadata.custom_fields[1].value;
      var level = eventData["data"].metadata.custom_fields[2].value;
    }
    //Insert the data into the sheet 
    sheet.getRange(lastRow + 1, 1).setValue(time); 
    sheet.getRange(lastRow + 1, 2).setValue(hookType); 
    sheet.getRange(lastRow + 1, 3).setValue(eventData["data"]);  
    sheet.getRange(lastRow + 1, 4).setValue(customerEmail);
    sheet.getRange(lastRow + 1, 5).setValue(customerReference);
    sheet.getRange(lastRow + 1, 6).setValue(customerAmount/100);
    sheet.getRange(lastRow + 1, 7).setValue(firstName);
    sheet.getRange(lastRow + 1, 8).setValue(lastName);
    sheet.getRange(lastRow + 1, 9).setValue(level);
    

  return HtmlService.createHtmlOutput(200);
