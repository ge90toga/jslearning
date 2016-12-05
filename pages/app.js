var tony = {
    firstname: "Tony",
    lastname: "Stark",
    address: {
        street: "111 Main St.",
        city: "New York",
        state:"NY"
    }
};

function greet(p){
    console.log('Hi ' + p.firstname);
}

console.log(tony);
greet(tony);
