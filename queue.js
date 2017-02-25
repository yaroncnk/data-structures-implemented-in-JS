//Implementing a queue
var myQueue = [];

//enqueueing 
for (var i =0 ; i<= 20 ; i++) {
    myQueue.push(i);
}

//dequeueing 
for (var j = myQueue.length ; j > 0 ; j--) {
    console.log(myQueue.shift());
}
