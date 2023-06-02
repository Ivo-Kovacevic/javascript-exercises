const findTheOldest = function(array) {
    const oldest = array.reduce((oldestPerson, currentPerson) => {
        oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return currentPerson;
        } else {
            return oldestPerson;
        }
    });
    return oldest;
}

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear()
    }
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
