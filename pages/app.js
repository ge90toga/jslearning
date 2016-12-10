function makeGreeting(language) { // a function factory generates functions

    return function(firstname, lastname) {

        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }

    }

}

var greetEnglish = makeGreeting('en'); // execution context here
var greetSpanish = makeGreeting('es'); // execution context here

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');