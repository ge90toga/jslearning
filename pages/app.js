// console.log(this);

function a() {
    console.log(this);
    this.name = "Linus Quan";
}

a(); // simply invoking function, this refers to global context

var b = function () {
    console.log(this);
}
console.log(name); // Linus Quan gets output since this in a() refers to global context
b(); // all global this


// In object method
// var obj = {
//     name: "javascript name",
//     log: function () {
//         this.name = "updated js name";
//         console.log(this); // this refers to obj in which property name gets changed to new value
//         var setname = function (newname) {
//             this.name = newname;
//         }
//         setname("set a new name");
//         // a weird bug
//         console.log(this);
//         // try window in console and you can see the name is set in global context
//     }
//
// }



// A better practice:

var obj = {
    name: "javascript name",
    log: function () {
        var self = this; // objects set by reference, self points to the same address of this
        self.name = "updated js name";
        console.log(self); // this refers to obj in which property name gets changed to new value
        var setname = function (newname) {
            self.name = newname;
        }
        setname("set a new name");
        // a weird bug
        console.log(self);
        // try window in console and you can see the name is set in global context
    }
}


obj.log();