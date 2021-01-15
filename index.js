const m = 1;
const h = 2;
const showdown = require('showdown');
const converter = new showdown.Converter();
const chalk = require('chalk');
const error = chalk.red.bold;
const fs = require('fs');

function fileerror(){
    console.log(error("Type should be input a variable like `m` or `h`"));
}

function make(typ, bef, aft) {
    let con;
    let text = fs.readFileSync(bef).toString();
    if (typ == 1) {
        con = converter.makeMd(text);
    } else if (typ == 2) {
        con = converter.makeHtml(text);
    } else {
        fileerror();
    }
    let output = fs.writeFileSync(aft, con);
    console.log(output);
}

module.exports = {
    m, 
    h, 
    make
};