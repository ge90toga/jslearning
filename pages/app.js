// 1
function sayHiLater() {

    var greeting = 'Hi!';
    // set a function expression
    // set timeout sets an async event
    setTimeout(function() {
        // greeting here has a closure to the sayHiLater()'s greeting
        console.log(greeting);

    }, 3000);

    console.log("say hi finishes");
}

sayHiLater();

// 2
// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});

// 3 callback function
// the functionB you give to functionA (as parameter), to be run when function A finishes.

function tellMeWhenDone(callback) {

    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it!

}

// give tellMeWhenDone a function
tellMeWhenDone(function() {

    console.log('I am done!');

});

// give tellMeWhenDone yet another function
tellMeWhenDone(function() {

    console.log('All done...');

});
