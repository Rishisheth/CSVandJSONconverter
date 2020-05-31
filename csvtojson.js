const fs = require('fs');
const path = require("path");

function CSVtoJSON(csv, header){

    var lines=csv.split("\n");
    var length = 0;
    for (let y = 0; y < lines.length; y++) {
        if (lines[y].length > 0) {
            length++;
        }
    }
    var result = [];
    if (header === true) {
        lines[0] = lines[0].replace(/ /g,'');
        var headers=lines[0].split(",");
    } else {
        var blank = ", ,  ,   ,    ,     ,      ,       ,        ,         ";
        var headers = blank.split(",");
    }
    for(var i=1;i<length;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<currentline.length;j++){
            const item = currentline[j].trim();
            obj[headers[j]] = item;
        }
        result.push(obj);
  
    }
    result = JSON.stringify(result, null, 4);
    return result;
  }

const csv = fs.readFileSync('csv_file_name.csv');
var stringData=csv.toString();
var header = false;
const data = CSVtoJSON(stringData, header);
fs.writeFileSync("json_file_name.json", data);
