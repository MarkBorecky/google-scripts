function generateTextFile() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Zmień na właściwą nazwę arkusza
  var data = sheet.getDataRange().getValues();
  
  var textLines = [];
  
  for (var i = 0; i < data.length; i++) {
    var line = data[i][0].toString().trim() + " " + data[i][1].toString().trim();
    
    for (var j = 2; j < 7; j++) {
      line += ", " + data[i][j].toString().trim();
    }
    
    line += ", д. " + data[i][7].toString().trim(); 
    line += ", " + data[i][8].toString().trim();

    textLines.push(line);
  }
  
  var textContent = textLines.join('\n');
  
  var fileName = `names with id${new Date().toString().slice(0,15)}.txt`;

  var blob = Utilities.newBlob(textContent, "text/txt", fileName);
  DriveApp.createFile(blob);
}
