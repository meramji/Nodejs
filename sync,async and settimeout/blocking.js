const crypto=require("crypto");

console.log("hello World");
var a= 241677;
var b=5462;



crypto.pbkdf2Sync("password","Salt",50000,50,"sha512");
console.log("first key is created"); //It will is syn function it will block thread the code will not run until this  code run first.Then the other code  first

crypto.pbkdf2("password","Salt",50000,50,"sha512",(err,key)=> {
    console.log("key is created");  //It is asyn function it will not block thread.
});

function multiply (x,y){
    const result=x*y;
    console.log(result);
}

multiply(4,9);
