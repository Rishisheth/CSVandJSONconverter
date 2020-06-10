const fs = require('fs');
const path = require("path");
var assert = require('assert');
var convert = require('../lib/converter');

describe('Converter', function() {
    convert.CSVtoJSON('./examples/csvexample.csv', './examples/jsontestexample.json', true);
    convert.JSONtoCSV('./examples/jsonexample.json', './examples/csvtestexample.csv');
    convert.CSVtoJSON('./examples/csvnoheaderexample.csv', './examples/jsonnoheadertestexample.json', false);
    convert.JSONtoCSV('./examples/jsonnoheadertestexample.json', './examples/csvnoheadertestexample.csv');

    var originalcsv = fs.readFileSync('./examples/csvexample.csv');
    originalcsv = originalcsv.toString();

    var newcsv = fs.readFileSync('./examples/csvtestexample.csv');
    newcsv = newcsv.toString();

    var originaljson = fs.readFileSync('./examples/jsonexample.json');
    originaljson = originaljson.toString();

    var newjson = fs.readFileSync('./examples/jsontestexample.json');
    newjson = newjson.toString();

    var originalcsvnoheader = fs.readFileSync('./examples/csvnoheaderexample.csv');
    originalcsvnoheader = originalcsv.toString();

    var newnoheadercsv = fs.readFileSync('./examples/csvnoheadertestexample.csv');
    newnoheadercsv = newcsv.toString();

    it('converted csv files should be equal to what the correct file is', function(){
        assert(originalcsv.length == newcsv.length);
    });
    it('converted json files should be equal to what the correct file is', function(){
        assert(originaljson.length == newjson.length);
    });
    it('converted csv file with no header should be equal when converted back', function(){
        assert(originalcsvnoheader.length == newnoheadercsv.length);
    });
});