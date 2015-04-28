module.exports.equalStrings = function(stringOne, stringTwo) {
    return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
    return one !== two
};

module.exports.inBetween = function(lower, middle, upper) {
    return lower < middle && middle < upper;
};

module.exports.outsideRanges = function(number) {
    return !((number >= 10) && (number <= 20)) &&
        !((number > 42) && (number <= 75)) &&
        !((number > 1) && (number < 6));
};

module.exports.nameAndPrice = function(name, price) {
    return (name === 'NYTimes' || name === 'LATimes') && (price >= 1);
};
