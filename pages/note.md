coerce (implicit conversion)
js is a dynamic typing language
understand the operator precedence, and left to right

3 < 2 < 1 goes to false < 1 which then converts to 0 < 1 then true!

don't use == 
use === 

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

### Coerce
#### Default value
 * || does more than just return true or false, it returns the value that first can convert to true:
 * It returns the value that can be **coerce** to true!!!
 *  0 || 1 // return 1
 *  0 || 'Hello' // return 'Hello'
 *  null || 'Hello' // return 'Hello'