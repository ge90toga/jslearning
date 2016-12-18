var friends = [ // some fake data
    {name: 'Kyle', lastText: 'How are you?', face: '/img/kyle.png'},
    {name: 'Stan', lastText: 'Thanks', face: '/img/stan.png'},
    {name: 'Eric', lastText: 'Meet me after 5.', face: 'img/cartman.png'},
    {name: 'Kenny', lastText: 'Meet me after 5.', face: 'img/kenny.png'}
];

friends = friends.filter(function( obj ) {
    return obj.name !== 'Kyle';
});

//console.log(friends);


// var re = /{(\w+)}\s(\*+)/;
// var str = "sdsd";
//
// if(str.match(re)){
//     var arr = str.split(re);
//     console.log('Send to:',arr[1]);
//     console.log('Message: ',arr[2]);
// }
// // // function splitString(stringToSplit, separator) {
// // //     var arrayOfStrings = stringToSplit.split(separator);
// // //
// // //     console.log('The original string is: "' + stringToSplit + '"');
// // //     console.log('The separator is: "' + separator + '"');
// // //     console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// // // }
// // //
// // // var tempestString = 'Oh brave new world that has such people in it.';
// // // var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
// // //
// // // var space = ' ';
// // // var comma = ',';
// // //
// // // splitString(tempestString, space);
// // // splitString(tempestString);
// // // splitString(monthString, comma);
//
// // var message = {};
// //
// // function pushMessage(msg) {
// //     if(!message.person){
// //         message.person = [{sender:"Mike", text:msg}];
// //     }else{
// //         message.person.push({sender:"Mike", text:msg});
// //     }
// // }
// //
// // pushMessage('Hello');
// // console.log(message);
