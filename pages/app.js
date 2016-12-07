
function greet(firstname,lastname, language) {
    language = language || "en"; // default value
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('-----------')
}

function greet2(firstname,lastname, language) {

    if(arguments.length === 0) {
        console.log("missing parameters");
        return;
    }

    language = language || "en"; // default value
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    //keyword arguments
    console.log(arguments);
    console.log(arguments[0]);
    // prints an "array like" argument list
    // we can almost treat it as an array
    console.log('-----------')
}

greet(); // undefined
greet('John'); // comes from left to right
greet2('Mike','Green','Think');
