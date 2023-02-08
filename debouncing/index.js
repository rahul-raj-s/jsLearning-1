function debounce(fun1) {
  let time;

  return function (...args) {
    clearInterval(time);
    time = setTimeout(() => {
      fun1.apply(this, args); // Function calling
    }, 500);
  };
}
