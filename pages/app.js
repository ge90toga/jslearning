function greet() {
    console.log('Hi');
}

greet.language = 'english'; // assign value to a function
console.log(greet); // prints greet definition
console.log(greet.language); // just like property you can attach to any other object
