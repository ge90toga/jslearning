// Number(false) // 0
// Number(true) // 1
// Number(undefined) // NaN not a number
// Number(null) //0


// false == 0;

// strict equal ===
// does not try to convert


// good use for coresion:

// var a = "";
// if (a) {
//     console.log("a is something");
// }else{
//     console.log("a is nothing")
// }

// learn default value


function greet(name) {
    console.log('Hello ' + name);
}

/*
 * || does more than just return true or false, it returns the value that first can convert to true:
 * It returns the first value that can be coerce to true!!!
 *  0 || 1 // return 1
 *  'Hi' || 'Hello' //return Hi
 *  0 || 'Hello' // return 'Hello'
 *  null || 'Hello' // return 'Hello'
 */
function greetDefault(name){
    name = name || '<default name>';
    console.log('Hello ' + name);
}
greet();
greet('Tom');

greetDefault();
greetDefault('Boris');
greetDefault(0); // will get default name