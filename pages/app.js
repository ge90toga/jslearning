// Builtin constructor
var a = new Number(3); // wrapper object
// a is a object wraps the Number object inside
console.log(a);
var s = new String("Hello");
console.log(s);
// They can use methods in their primitive types because of the prototype chain
console.log(s.indexOf('e'));
// But they are not primitives
console.log("Hello" == s);
console.log("Hello" === s); // Type is not the same l:string r:object

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

// Primitive String is automatically converted to String object
console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}

// But you cannot call 3.isPositive()
// You can:
var m = 3; // var Number(3);
m.isPositive(); // This works
// a is a wrapper object, m is number object but 3 just cannot call isPositive() although it is also a number

