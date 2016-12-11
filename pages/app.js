var person = {
    firstname: 'Linus',
    lastname: 'Quan',
    getFullName: function(){
        var fullname = this.firstname + ' '+ this.lastname;
        return fullname;
    }
}

var logName = function (lang1,lang2) {
    console.log('Name: '+ this.getFullName());
}

// logName() // produces error

var logPersonName = logName.bind(person); // bind the object to var's this property
logPersonName(); // no error this time

var logNamebind = function (lang1,lang2) {
    console.log('Name: '+ this.getFullName());
}.bind(person);

logNamebind();

logName.call(person,'en','cn'); // pass the first param to replace 'this' in logName
logName.apply(person,['en','cn']); // does the same, just use [] as the second parameter




// Function Borrowing
var person2 = {
    firstname: 'Kindle',
    lastname: 'Shu'
};
// person2 actually borrows person1!
console.log(person.getFullName.apply(person2));

// Function Currying

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
// Creating a copy of a function with preset params
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));