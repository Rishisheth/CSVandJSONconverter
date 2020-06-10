
const fs = require('fs');
const path = require("path");

module.exports = {
CSVtoJSON : function(csv_file_name, json_file_name, header){
    var csv = fs.readFileSync(csv_file_name);
    csv = csv.toString();
    csv.trim;
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
    fs.writeFileSync(json_file_name, result);
    return result;
  },

JSONtoCSV : function(json_file_name, csv_file_name){
    var temp = fs.readFileSync(json_file_name);
    var json = temp.toString();
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
        fs.writeFileSync(csv_file_name, values.substring(0, values.lastIndexOf("\n")));
        return values.substring(0, values.lastIndexOf("\n"));
    } else {
        fs.writeFileSync(csv_file_name, values);
        return values;
    }
}
}