function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function () {
    return this.firstname + ' '+ this.lastname;
}


// constructor
var john = new Person('John', 'Doe');
console.log(john);


var jane = new Person('Jane', 'Doe');
console.log(jane);
// now john and jane's __proto__ has getFullName function property!!!


// we can even add this on the fly:
Person.prototype.getFormalFullName = function () {
    return this.lastname + ','+ this.firstname;
}

// john.getFormalFullName() uses prototype chain to lookup

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());

console.log(jane.__proto__);// an Object{} which contains getFullName, getFormalFullName
// you can add functions in function Person(){...}
// but it takes up more memory spaces
// use .prototype is more space efficient

//
