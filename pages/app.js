// polyfill
if (!Object.create) { // For old browser that has no create function
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation'
                + ' only accepts the first parameter.');
        }
        function F() {} // create a function
        F.prototype = o; // function's prototype points to the proto object o
        return new F(); // new here construct a new object where its __proto__ points to o
    };
}


var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
};

var john = Object.create(person); // john's __proto__ points person
john.firstname = 'John';
john.lastname = 'Doe'; // we can override properties
console.log(john.greet()); // Hi John

/**
 * We used person to construct an new object which points its __proto__ to person
 * w
 */

