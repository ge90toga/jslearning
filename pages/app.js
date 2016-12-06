var objectLiteral = {
        firstname: "Mary",
        isProgrammer: true
};

console.log(JSON.stringify(objectLiteral)); // a built-in function to translate js obj to JSON

var jsonValue = JSON.parse('{ "firstname": "firstname", "isProgrammer": true}');
console.log(jsonValue);