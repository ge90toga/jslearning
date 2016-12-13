### Everything is object
- In js everything has a proto property except for empty Object{}
```javascript
var a = {}; 
var b = function () {};
var c = [];

// a.__proto__ is  Object{}
// b.__proto__ is function(){} (primitive function)
// b.__proto__ contains call(), apply(), bind()...
// c.__proto__ is [] (primitive array) which contains splice, indexOf...

// b.__proto__.__proto__ is Object{}
// c.__proto__.proto__  Object{}
// the end of prototype chain: Object{}
```