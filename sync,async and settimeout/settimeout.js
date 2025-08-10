console.log("hello everyone");

var a = 355667;
var b = 930309;

setTimeout(() => {
  console.log("call me immediately");
}, 0); //asyn will always run when the  call stack is empty.

function multiply(a, b) {
  const result = a * b;
  console.log(result);
}
multiply(a, b);
