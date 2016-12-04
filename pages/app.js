// hoisting
// function get entirely "injected" (set up memory space) in global

b(); //output hello world (function gets entirely hoisted)
console.log(a); // for a variable, only a placeholder is set (assignment is executed during execution phase, not hoisting)
console.log(c); // error; not defined != undefined

var a = 'Hello Javascript';

function  b() {
    console.log('function b');
}

