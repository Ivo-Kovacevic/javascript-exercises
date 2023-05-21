const removeFromArray = function(array, ...pos) {
    const newArray = [];
    array.forEach((item) => {
        if(!pos.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

/*
function filteredValue(value) {
    return !pos.includes(value);
}
const filtered = array.filter(filteredValue)
return filtered;
*/

// Do not edit below this line
module.exports = removeFromArray;
