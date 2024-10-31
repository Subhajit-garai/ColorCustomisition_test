const fs =require("fs");

// let hi=fs.readFileSync("hi.txt"); // read file
// hi=hi.toString();
// console.log( hi);


// create   open in w mode
// fs.openSync("abc.txt","w");

// fs.writeFileSync("abc.txt","new file here ");  //for write file , it can override content in file 

// fs.appendFileSync("abc.txt","   append file worke here");  // it cannot  override content in file  ,it simple add next content 


//         create                     read                          write                                               delete                                       update
// file  fs.openSync("abc.txt","w")   fs.readFileSync("hi.txt");  fs.writeFileSync("abc.txt","new file here ");     fs.unlinkSync("fileName/"+ content[i]);         fs.appendFileSync("abc.txt","   append file worke here");
// dir    fs.mkdirSync("fileName");                                                                                 fs.rmdirSync("fileName");


//folder

// fs.mkdirSync("fileName");
// fs.writeFileSync("fileName/file.txt","here file.txt");

// let content =fs.readdirSync("fileName"); 
// // console.log(content); //[ 'file.txt' ]

// for(let i=0 ;i < content.length;i++){
//     fs.unlinkSync("fileName/"+ content[i]);  // delete file or for remove  file
// }

// fs.rmdirSync("fileName");//for remove  folder


//fs.existSync -> if a file exist at a path -> true/false
//fs.lstatSync -> it is a fil


// let inputArr =process.argv.slice(2); //for inpute