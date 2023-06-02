const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let f1 = 1;
    let f2 = 1;
    let sum;
    for (let i = 2; i < number; i++) {
        sum = f1 + f2;
        f1 = f2;
        f2 = sum;
    }
    return f2;
};

// 1, 1, 2, 3, 5, 8

// Do not edit below this line
module.exports = fibonacci;
