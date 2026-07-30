const array = [1, 2, 3];

function addOne(array) {
  const newArray = array.push(4);
  return array;
}
console.log(addOne());
let arr = [-2, -1, 0, 1, 99];
function addFrontOne(arr) {
  let newArr = [...arr];
  newArr.push(-1, 0, 1, 100);
  return arr;
}
console.log(addFrontOne(arr));
