//An implementation of linked lists in JS

//1. Creating the head
function linkedList(){
    this.head = null;
}

//2. Adding a methong to the object's prototype
linkedList.prototype.push = function(val){
    var node = {
        value: val,
        next: null
    };
    if(!this.head) { //is there's no head - create one
        this.head = node;
    }
    else { //else - keep on going and add a node at the end of the list
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
};

//modelling the process
var myList = new linkedList();
myList.push(11);
myList.push(24);
myList.push(45);

console.log(myList.head);


