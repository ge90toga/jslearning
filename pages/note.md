Library name collision
the latter included js file (vars and functions) overrides the former
We could use 
window.property = property || window.property to deal with this issue.
