var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// prints out every property(function) including its prototypes'
for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

// prints out every property(function) including its prototypes'
for (var prop in john) {
    // Only print its own by calling hasOwnProperty(property)
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);




