//map and filter function

function map(arr, modifyTheValue) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let modifiedValue = modifyTheValue(arr[i]);
    result.push(modifiedValue);
  }
  return result;
}

function square(arr) {
  return arr * arr;
}

function cube(arr) {
  return arr * arr * arr;
}

function addFive(num) {
  return num + 5;
}

let arr1 = [1, 2, 3, 4, 5];

let result = map(arr1, square);
let resultCube = map(arr1, cube);
let plusFive = map(arr1, addFive);
console.log(result);
console.log(resultCube);
console.log(plusFive);

// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//   let arr = [1, 2, 4, 6, 9];
//   let square = arr.map((item) => item * item);
//   let evens = arr.filter((item) => item % 2 == 0);
//   console.log(square);
//   console.log(evens);

//   arr = [2, 5, 6, 3, 7];
//   let divisible3 = arr.filter((number) => number % 3 == 0);
//   console.log(divisible3);
