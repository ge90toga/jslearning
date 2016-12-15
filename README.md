- Every function in js has a property: **prototype**, but unless you are using 
the function as a constructor, it is never used.
- It lives for **only when you use new (function Ctor)**
- The _prototype property_ on a function is **not** the **prototype** of a function (__proto__)
- It is the prototype of any object created if you are using func Ctor
- To avoid danger: any function that we intend to be a function constructor,
 we use Capital letter.