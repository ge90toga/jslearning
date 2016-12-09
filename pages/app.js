function outter(whattosay) {
    var function_name = "--outer function--";
    var un_used = "unused";
    return function (name) {
        console.log(whattosay + ' '+ name+' '+function_name);
    }
}

outter('Hi')('Li'); // greet returns a function and we call that function