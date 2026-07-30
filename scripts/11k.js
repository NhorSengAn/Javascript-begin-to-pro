const nums = [1, , 2, 4, -7, -23, 99, -3, 5];
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    console.log();
  }
}

// console.log(count);

function countNumber() {
  const positiveCount = nums.filter((count) => count > 0).length;
  const negativeCount = nums.filter((count) => count < 0).length;
  console.log(`Positive: ${positiveCount}`);
  console.log(`Negative: ${negativeCount}`);
}
