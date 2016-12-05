var person = new Object();

// use [] to access property
person["firstname"] = "Tony";
person["lastname"] = "Stark";
var firstNameProperty = "firstname";

console.log(person);
console.log(person["firstname"]);
console.log(person[firstNameProperty]);

// . access
console.log(person.firstname);
console.log(person.lastname);

//

person.address = new Object();
person.address.city = "Sydney";
person.address.street = "1 cowper street";
console.log(person["address"]["city"]);
console.log(person.address.city);

// [] offers dynamic access but one should use . as much as possible