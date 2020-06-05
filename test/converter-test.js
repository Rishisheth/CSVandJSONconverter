const fs = require('fs');
const path = require("path");
var assert = require('assert');
var convert= require('csvandjsonconverter');

describe('Converter', function() {
    convert.CSVtoJSON('csvexample.csv', 'jsontestexample.json', true);
    convert.JSONtoCSV('jsonexample.json', 'csvtestexample.csv');

    var originalcsv = fs.readFileSync('csvexample.csv');
    originalcsv = originalcsv.toString();

    var newcsv = fs.readFileSync('csvtestexample.csv');
    newcsv = newcsv.toString();

    var originaljson = fs.readFileSync('jsonexample.json');
    originaljson = originaljson.toString();

    var newjson = fs.readFileSync('jsontestexample.json');
    newjson = newjson.toString();
    it('converted csv files should be equal to what the correct file is', function(){
        assert(originalcsv.length == newcsv.length);
    });
    it('converted json files should be equal to what the correct file is', function(){
        assert(originaljson.length == newjson.length);
    });
});