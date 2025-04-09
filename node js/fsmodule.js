const fs=require('fs')
// fs.readFile('script.js','utf8',(err,data)=>{
//     console.log(err,data)
// })

// const a=fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("finished reading file")

// fs.writeFile('script.js','this is a data',()=>{
//     console.log("written to the file")
// })
// console.log("finished reading file")

// fs.writeFile('file.txt','this is a data',()=>{
//     console.log("written to the file")
// });

// console.log("finished reading file");

// fs.writeFile('file.txt','this is second data',()=>{
//     console.log("written to the file")
// })
// console.log("finished reading file")

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

const a =fs.readFileSync('file.txt')
console.log(a.toString())
console.log("finished reading file")