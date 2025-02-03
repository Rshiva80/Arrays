class List{
constructor(data){
    this.head = {
        value : data,
        next: null
    };
    this.tail = this.head;
}
    appendNode(newData){
        let newNode = {
            value : newData,
            next : null
        };
        
        this.tail.next = newNode; // Link current tail to new node
        this.tail = newNode; // Update tail to new node
    }
}
 
const l1 = new List(200);
l1.appendNode(300);
l1.appendNode(400);

console.log(l1); // Prints the linked list object 
