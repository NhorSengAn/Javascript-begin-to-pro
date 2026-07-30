const fruit = ["apple", "apple", "grape", "apple"];
const fruitCount = [];
for (let i = 0; i < fruit.length; i++) {
  const name = fruit[i];
  if (fruitCount[name]) {
    fruitCount[name] += 1;
  } else {
    fruitCount[name] = 1;
  }
}
console.log(fruit);
console.log(fruitCount);
