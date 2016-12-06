### JS Functions
- functions are **objects** in js
- In js we have the concept called first class functions
#### What we can do to function in js
* things we can do to other types, we can also do to function
* assign them to variables, pass them around, create them on the fly

Assume we have a function
```javascript
function greet() {
    console.log('Hi');
}
```
it has:
* name property greet;
* code property "Invokable";

#### Function expression
Expression: a unit of code results in a value (not necessarily store);
#### Anonymous function
```javascript
var anonymous = function() {
    console.log('Hi');
}
anonymous();
```
* The variable is pointing to the anonymous function's address
* name property for this function is anonymous
