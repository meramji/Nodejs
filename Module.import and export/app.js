// const { x, calculatesum } = require("./calculate/sum.js"); //it connect different modules
// // module protects its variable  and function from leaking

// const { calculatemultiply } = require("./calculate/multiply.js");

const {calculatemultiply,calculatesum}=require("./calculate/index.js")
require("./xyz.js");
var name = "hello sab achha";

const data=require("./data.json")

console.log(data);

var a = 10;
var b = 20;

calculatemultiply(3, 8);
calculatesum(6,9)

console.log(globalThis === global);

//calculatesum(2,9);
//console.log(x);
