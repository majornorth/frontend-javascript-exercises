module.exports.formLetter = function(firstName, senderName, message) {
    return "Hello " + firstName + ",\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    var bigString = bigString;
    var substring1 = bigString.substring(startA, endA);
    var substring2 = bigString.substring(startB, endB);
    return substring1 + substring2;
};

module.exports.findFirstMatch = function(text, searchString) {
    var textToSearch = text;
    var searchFor = searchString;
    var result = textToSearch.indexOf(searchFor);
    return result;
};

module.exports.findLastMatch = function(text, searchString) {
    var textToSearch = text;
    var searchFor = searchString;
    var result = textToSearch.lastIndexOf(searchFor);
    return result;
};

module.exports.substringBetweenMatches = function(text, searchString) {

    // I know this is super gross. Can't wait to see how you would refactor it :)

    var textToSearch = text;
    var searchFor = searchString;

    var firstMatch = textToSearch.indexOf(searchFor);
    var firstSearchString = textToSearch.substring(firstMatch, (firstMatch + searchFor.length));
    // console.log("Index of searchString: " + firstMatch);
    // console.log(firstSearchString);

    var lastMatch = textToSearch.lastIndexOf(searchFor);
    var lastSearchString = textToSearch.substring(lastMatch, (lastMatch + searchFor.length));
    // console.log("Last index of searchString: " + lastMatch);
    // console.log(lastSearchString);

    var slice1 = firstMatch+searchFor.length;
    // console.log(slice1);

    var slice2 = lastMatch;
    // console.log(slice2);

    var result = textToSearch.slice(slice1, slice2);

    return result;
};
