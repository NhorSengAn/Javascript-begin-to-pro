const arr = ["khmer", "check", "Make money", "search", "prey veng"];
let foundIndex = -1;
for (let i = 0; i < arr.length; i++) {
  const name = arr[i];
  if (name === "search") {
    foundIndex = i;
  }

  if (foundIndex !== -1) {
    arr.splice(foundIndex, 1);
  }
}
console.log(foundIndex);
console.log(arr);
