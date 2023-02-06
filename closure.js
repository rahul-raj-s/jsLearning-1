// function hello() {
//   console.log("Hello");
// }

// function sum() {
//   console.log("Sum");
// }

// Check reduce function and implement
// Create a branch and write reduce, map & filter functions for array
// Push to github and add everyone as reviewer.

// Closure

// function a() {
//   let count = 0;

//   return function b() {
//     count++;
//     console.log("Hello Closure", count);
//     console.log("Hello from b");
//   };
// }

// let c = a();
// // Context(Closure) gets added along with return value that is c
// let d = a();

// c();
// c();
// d();
// d();

let inputField = document.getElementById("search-input");
let counter = document.getElementById("counter");

function debounce(fun1) {
  let time;

  return function (...args) {
    clearInterval(time);
    time = setTimeout(() => {
      fun1.apply(this, args); // Function calling
    }, 500);
  };
}

function costlyFunction(e) {
  let pTag = document.createElement("div");
  pTag.innerHTML = e.target.value;
  counter.appendChild(pTag);
}

let debounceCostlyFunction = debounce(costlyFunction);

inputField.oninput = debounceCostlyFunction;

// Clone this repository
// Move this code in a file called closure.js
// ("https://github.com/rajsrivastvaa/jsLearning-1");
