function greet() {
    console.log('Hi');
}

// anoynmousF(); // cannot be used here, variable is undefined

var anoynmousF = function () {
    console.log('Hello');
};

anoynmousF();

function log(a) {
    a();
}

log(function () {
    console.log("Hi from function as param");
})