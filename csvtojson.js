
const fs = require('fs');
const path = require("path");

function CSVtoJSON(csv){

    var lines=csv.split("\n");
    var length = 0;
    for (let y = 0; y < lines.length; y++) {
        if (lines[y].length > 0) {
            length++;
        }
    }
    lines[0] = lines[0].replace(/"/g,'');
    lines[0] = lines[0].replace(/ /g,'');
    var result = [];
    var headers=lines[0].split(",");
  
    for(var i=1;i<length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            const item = currentline[j].trim().replace(/"/g,'');
            obj[headers[j]] = item;
        }
  
        result.push(obj);
  
    }
    result = JSON.stringify(result, null, 4);
    result = result.replace(/\\/g, "");
    return result;
  }

const csv = fs.readFileSync('csv_file_name.csv');
var stringData=csv.toString();
const data = CSVtoJSON(stringData);
fs.writeFileSync("json_file_name.json", data);
