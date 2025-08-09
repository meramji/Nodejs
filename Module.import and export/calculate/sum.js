function calculatesum(a, b) {
  const sum = a + b;

  console.log(sum);
}

var x = "sab achhaa  hai";

module.exports = {
  x: x,
  calculatesum: calculatesum, //if we want to export more than one thing we will wrap by a object and export
};
