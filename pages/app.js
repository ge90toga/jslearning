// var greet = "Hello";
// var greet = "Hola"; // collision


var english = {greetings:{}};

var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

// namespace inside namespace
//english.greeting = {};
english.greetings.greet = "Hello";