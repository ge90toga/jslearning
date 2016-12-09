// Immediately invoked function expression
// run immediately after creating the function
var greetR =  function (name) {
    console.log('Hello ' + name);
}("Michel");

var hellostr = function (name) {
    return 'Hello '+ name;
}('Pig');

// prints out undefined, this time the function execution result
// returns to the var
console.log(greetR);
console.log(hellostr);

// hellostr(); an error because it is not a function
// use IIFE without the var name, () is used to trick the syntax parser as without it leads to an
// syntax error
(function (name) {
    console.log('Hello From IIFE'+ name);
}(hellostr));

(function (name) {
    console.log('Hello From IIFE'+ name);
})(hellostr); // invoke out side of () is the same