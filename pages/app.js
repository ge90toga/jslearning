/*
 While the waiting is executing, click the 'clickme',
 this event will be pushed into the event queue.
 When this exec stack is empty, the execution stack stops;
 */
function waitForThreeSec() {
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){} // wait for 3 secs;
    console.log('finished 3s waiting');
}


function clickHandler() {
    console.log('click event');
}


document.getElementById('wait').addEventListener('click', waitForThreeSec);
document.getElementById('clickme').addEventListener('click', clickHandler);

//document.getElementById('wait').addEventListener('click',waitForThreeSec);
console.log('finished global exec');

