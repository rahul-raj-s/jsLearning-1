// function filter(arr1, callback) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (callback(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }

// function calcEvenValue(value) {
//   if (value % 2 == 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = filter(arr1, calcEvenValue);
// console.log(result)



let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcEvenValue(x) {
  if (x % 2 == 0) {
    return true
  }
  else {
    false
  }
}
let result = arr1.filter(calcEvenValue);
console.log(result)