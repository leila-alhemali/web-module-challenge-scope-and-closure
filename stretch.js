function addSix(number) {
  let base = 6;
  return function addNumber() {
    return base + number;
  };
}

const addition = addSix(10);

console.log(addition());

// function addSix (base)
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
