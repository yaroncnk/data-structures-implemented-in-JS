//Implementing a stack
var myStack = [];

//Pushing to the stack
for (var i =0 ; i<= 20 ; i++) {
    myStack.push(i);
}

//Last in first out (LIFO)
for (var j = 0 ; j < myStack.length ; j++) {
    console.log(myStack.pop());
}