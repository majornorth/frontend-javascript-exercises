// Why doesn't first function work?

// module.exports.sumNumbers = function(arr) {
//     for (var counter = 0; counter < arr.length; counter++) {
//         arr = arr[counter] + arr[(counter+1)];
//     }
//     return arr;
// };

// Found the answer below by searching 'function sum javascript array'
// and reading StackOverflow

module.exports.sumNumbers = function(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        count = count + arr[i];
    }
    return count;
};

module.exports.splitAndLowerCaseString = function(inputString) {
    // var res = inputString.toLowerCase().split(" ");
    // console.log(res);
    // return res;

    var findComma = ",";
    var commaExists = inputString.indexOf(findComma);
    if (!(commaExists === -1)) {
        var res = inputString.toLowerCase().split(",");
        return res;
    } else {
        var res = inputString.toLowerCase().split();
        return res;
    }

};

module.exports.addIndex = function(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(i + " is " + arr[i]);
    }
    return newArr;
};
