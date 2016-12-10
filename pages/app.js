function build3() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(function () {
            console.log(i);
        });
    }
    return arr;
}

// note that:
// when arr pushes functions,
// i is not evaluated because js just put the code into the function object code property
var func = build3();
// build3 execution context is cleared
// when inner function looks for i, i is already 3
func[0]();
func[1]();
func[2]();

// What if we want it to output 0,1,2?
// one way to do this is use ES6 let
function build3II() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        let j = i;
        // var is scoped to the nearest function block, in this case build3II
        // let is scoped to the nearest {} block which is for loop
        // when using 'let', every time the code runs, j will be segmented to a new memory address
        // don't mix let with var
        // understanding var vs let
        // http://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable
        arr.push(function () {
            console.log(j);
        });
    }
    return arr;
}

var func2 = build3II();
func2[0]();
func2[1]();
func2[2]();


// What if we want it to use ES5?
// we use IIFE to create a ( ) function scope
// and we use that IIFE to return a function.
function build3III() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push((function (j) {
            return function () {
                console.log(j);
            }
        }(i)));
    }
    return arr;
}

var func3 = build3III();
func3[0]();
func3[1]();
func3[2]();


// For non ES6