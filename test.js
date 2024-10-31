const fs =require("fs");
const path =require("path");
const { cwd } = require("process");
let name =0;

let cPath = cwd();
let resPath =path.join(cPath,'res');


let lastName =fs.readdirSync(resPath);
let Fyname = lastName[lastName.length-1];
let ff = Fyname.slice(0,1)
console.log(ff);



