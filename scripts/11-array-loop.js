/*

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }

  if (i === 8) {
    break;
  }

  // console.log(i);
}

let i = 1;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }

  console.log(i);
  i++;
}
*/
// const nums = [1, 2, 3, 4, 5];
function doubleArray(nums) {
  const numbDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      return numbDoubled;
    } else {
      numbDoubled.push(num * 2);
    }
  }
  return numbDoubled;
}

console.log(doubleArray([1, 2, 3]));
console.log(doubleArray([2, 4, 5, 0, 6]));
