### Dangerous Auto semicolon injection
```javascript

function getPerson() {
 
    return {
        firstname: 'Tony'
    }
    
}

// if you write: 

function getPerson() {
 
    return 
    {
        firstname: 'Tony'
    }
    
}
// and you call this function, the syntax parser will inject a ; right after return,
// meaning that the object is never returned!
// the best way to avoid this is to write { at the same line
```