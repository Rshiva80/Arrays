class Car{
    constructor(data){
        this.head = {
            value : data,
            next : null
        };
        this.tail = this.head;  
        this.size =1 ;
        //Initializes the linked list with the first node (head).
// Sets tail to head since initially, there's only one node
    }

   addNode(nodeData){
    let newnode = {
        value : nodeData,
        next : null
    };
    this.tail.next=newnode;
    this.tail = newnode;
    this.size ++;

//     //Creates a new node.
// Links the tail.next to this new node.
// Updates this.tail to point to the new node.
    }
}
let car = new Car(200);

car.addNode(300);
car.addNode(400);
car.addNode(500);

console.log(car);