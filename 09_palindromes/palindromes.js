const palindromes = function (word) {
    let unwantedCharacters = /[\W_]/g;
    let initialWord = word.toLowerCase().replace(unwantedCharacters, '');
    let reverseWord = initialWord.split('').reverse().join('');
    return initialWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
