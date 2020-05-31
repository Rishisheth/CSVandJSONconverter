const fs = require('fs');
const path = require("path");

function JSONtoCSV(json){
    var header = '';
    var values = '';
    var done = false;
    var total_categories;
    JSON.parse(json, (key, value) => {
        if (key == 0) {
            done = true;
        }
        if (done == false) {
            header = header + key + ', ';
            total_categories++;
        }
    }); 
    header = header.substring(0, header.length - 2);
    header += '\n'; 
    JSON.parse(json, (key, value) => {
        if (value.length >= 1) {
            values = values + value + ', ' ;
        } else {
            values = values.substring(0, values.length - 2);
            values += '\n';
        }
    });
    values = header + values;
    if(values.lastIndexOf("\n")>0) {
        return values.substring(0, values.lastIndexOf("\n"));
    } else {
        return values;
    }
  }
  
const json = fs.readFileSync('json_file_name.json');
var stringData=json.toString();
const data = JSONtoCSV(stringData);
fs.writeFileSync("csv_file_name.csv", data);
