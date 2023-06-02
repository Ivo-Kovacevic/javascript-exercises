const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for(const elem of arr) {
    sum += elem;
  }
  return sum;
};

const multiply = function(arr) {
  let mul = 1;
	for(const elem of arr) {
    mul *= elem;
  }
  return mul;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let fac = 1;
    for(let i = 1; i <= a; i++) {
      fac *= i;
    }
    return fac;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
