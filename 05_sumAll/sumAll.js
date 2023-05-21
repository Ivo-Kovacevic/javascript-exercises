const sumAll = function(lowNum, highNum) {
    let sum = 0;
    let temp;
    if (lowNum > highNum) {
        temp = lowNum;
        lowNum = highNum;
        highNum = temp;
    }
    if (lowNum < 0 || highNum < 0 || typeof(lowNum) !== 'number' || typeof(highNum) !== 'number') {
        return "ERROR";
    }
    for (i = lowNum; i <= highNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
