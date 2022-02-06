const h2m = 1;
const m2h = 2;
import { Converter } from 'showdown';
const converter = new Converter();
import { red } from 'chalk';
const error = red.bold;
import { readFileSync, writeFileSync } from 'fs';

function typerror(){
    console.log(error("The `typ` selection should be input as `hm` or `mh`"));
    console.log(error("See"));
}

function make(typ, bef, aft) {
    let con;
    let text = readFileSync(bef).toString();
    if (typ == 1) {
        con = converter.makeMd(text);
    } else if (typ == 2) {
        con = converter.makeHtml(text);
    } else {
        typerror();
    }
    let output = writeFileSync(aft, con);
    console.log(output);
}

export default {
    h2m, 
    m2h, 
    make
};
