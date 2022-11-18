
var array1 = ["cat", "sum", "fun", "run"];
var array2 = ["bat", "cat", "fun", "sun", "hut", "gut"];

found = array1.filter((val, index) => {
  console.log('index', index) // Stops at array1.length - 1
  return array2.includes(val)
})
console.log(found)