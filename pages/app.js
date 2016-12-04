// var myVar = 'Hello';
var gloVar = 'gloVar';
function a() {

    function b() {
        console.log(myVar); // output Hello2
        console.log(gloVar); // go to global
        console.log(undef); // undefined
    }

    var myVar = 'Hello2';
    b();
    var undef = 'Hello2';
}

a();

/*
Scope chain:
* The function sits on the stack,
* keep a reference of the outer environment
* When a var is called, it checks its current scope and look for its outer and
 * outer environment until it finds anything or nothing.
*
*
* */