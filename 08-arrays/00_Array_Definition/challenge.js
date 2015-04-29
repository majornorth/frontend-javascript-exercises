module.exports.newArray = function (arg1, arg2, arg3, arg4) {
    return [arg1, arg2, arg3, arg4];
};

module.exports.firstAndLast = function(arg) {
    var lastElementIndex = arg.length -1;
    if ((typeof arg[0] === 'string') &&
        (typeof arg[lastElementIndex] === 'string')) {
            return [arg[0].toString(), arg[lastElementIndex].toString()];
    } else if ((typeof arg[0] === 'number') &&
        (typeof arg[lastElementIndex] === 'number')) {
            return [arg[0], arg[lastElementIndex]];
    }
};
