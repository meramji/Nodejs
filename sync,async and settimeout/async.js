const fs = require("fs");  //it is a module for file reading,writting.
const https = require("https"); //it is a module for appendFile.

console.log("Asynchronous Javascript")

var a = 5;
var b = 10;


//It will block the thread.it will make it synchromous
// fs.readFileSync("./file.txt", "utf8");
// console.log("This will execute only after reading the file")

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("data fetch successfully")
})

setTimeout(() => {
    console.log("Execute it after 5 seconds")
}, 5000)

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("file data:" + data)
})

function multiply(x, y) {
    const result = x * y;
    return result
}

const c = multiply(a, b)
console.log("Multiplication ans is:" + c);
