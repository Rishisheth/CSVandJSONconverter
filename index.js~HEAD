#!/usr/bin/env node

var convert = require('./lib/converter');

var first = process.argv[2];
var second = process.argv[3];
var header = process.argv[4];
var header_or_not = true;
if (header === "false") {
    header_or_not = false;
}
if (first != null && second != null) {
    if (first.includes(".csv") && second.includes(".json")) {
        convert.CSVtoJSON(first, second, header_or_not);
        console.log("done");
    } else if (first.includes(".json") && second.includes(".csv")) {
        convert.JSONtoCSV(first, second);
        console.log("done");
    } else {
        console.log("Include correct files");
    }
} else {
    console.log("Include correct files");
}