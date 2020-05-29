
const fs = require('fs');
const path = require("path");

function JSONtoCSV(json){

    var lines=json.split("\n");
    var length = 0;
    for (let y = 0; y < lines.length; y++) {
        lines[y].replace(/ /g,"");
        if (lines[y].length > 0) {
            length++;
        }
    }
    var result = '';
    var i = 2;
    var counter = 0;

    // This loop creates the top headers by checking first few rows that are not just { //

    while (lines[i].length > 8) {
        var header = lines[i].split(":");
        header[0].trim;
        result = result + header[0];
        if (lines[i+1].length > 8) {
            result = result + ",";
        } else {
            result = result + "\n";
        }
        i++;
        counter++;
    }
    i = 0;
    var limit = length - 2;

    // This function iterates through and splits each row storing the second value in the results text //

    while (i < (limit)) {
        i = i + 2;
        for(var j=0;j<counter;j++){
            var currentline = lines[i].split(":");
            result = result + currentline[1];
            if (((j + 1) == counter) && ((i + 1) < (limit))) {
                result = result + "\n";
            }
            i++;
        }
    }
    result = result.replace(/ /g,'');
    return result;
  }
  
const json = fs.readFileSync('json_file_name.json');
var stringData=json.toString();
const data = JSONtoCSV(stringData);
fs.writeFileSync("csv_file_name.csv", data);