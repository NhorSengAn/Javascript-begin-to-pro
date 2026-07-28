const product1 = {
  name: "Basketball",
  price: 2095,
};

const product2 = {
  name: "Football",
  price: 1895,
};

// function isSameProduct(product1, product2) {
//   if (product1.name === product2.name && product1.price === product2.price) {
//     return true;
//   } else {
//     return false;
//   }
// }

// we can try with this code as well

function isSameProduct(product1, product2) {
  return product1.name === product2.name && product1.price === product2.price;
}

console.log(isSameProduct(product1, product2));