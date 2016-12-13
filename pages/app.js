//Functional Programming
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; ++i) {
        newArr.push(fn(arr[i]));
    }

    return newArr;
}

arr = [1, 2, 3];

// get an array which times*2 of the current array
arr2 = mapForEach(arr, function (number) {
    return 2 * number;
});

console.log(arr2.valueOf());

// we filter number with a rule
arr3 = mapForEach(arr, function (number) {
    return number > 2;
});

console.log(arr3.valueOf()); //[false, false, true]

var checkPassLimit = function (limiter, item) {
    return item > limiter;
};

// use bind to add a filter inside
var arr4 = mapForEach(arr, checkPassLimit.bind(this, 1));
console.log(arr4.valueOf());

var checkPassLimitSimpler = function (limiter) {
    return function (limiter, item) {
        // note this limiter is not passed from limiter outside! it is binded!!!
        return item > limiter;
    }.bind(this, limiter);
};

console.log(arr);

var arr5 = mapForEach(arr, checkPassLimitSimpler(2));
console.log(arr5.valueOf());




