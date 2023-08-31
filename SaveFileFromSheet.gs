function generateTextFile() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Zmień na właściwą nazwę arkusza
  var data = sheet.getDataRange().getValues();
  
  var textLines = [];
  
  for (var i = 0; i < data.length; i++) {
    var line = data[i][0].toString().trim() + " " + data[i][1].toString().trim();
    
    for (var j = 2; j < data[i].length; j++) {
      line += ", " + data[i][j].toString().trim(); // Pozostałe kolumny połączone przecinkiem
    }
    
    line += "д. " + data[i][7].toString().trim(); // Kolumna H z dodatkiem "д. "

    textLines.push(line);
  }
  
  var textContent = textLines.join('\n'); // Łączenie linii tekstu
  
  var fileName = "Test Doc " + new Date().toString().slice(0,15);//Create a new file name with date on end

  newFile = DriveApp.createFile(fileName, textContent)
}
