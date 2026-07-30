const array1 = [1, 1, 2];

const array2 = [1, 2, 4];
const sumArray = [];

function addArray(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    sumArray.push(array1[i] + array2[i]);
  }

  return sumArray;
}


console.log(addArray(array1, array2));
