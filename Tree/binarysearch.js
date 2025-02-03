//the left node is small then root and right node https://www.youtube.com/watch?v=09MUBliFV8M&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=41&ab_channel=CodeStepByStep
//root is null

//To create the node, first we will add value of node , and give left and right values null;
class Node {
constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

}


// this class is to start creating BST
class BSTree{
    constructor(){
        this.root = null ; // root tree is null in starting
    }
    isTreeemplty(){
       return this.root === null;

    }
}

let bst = new BSTree();
console.log(bst.isTreeemplty());

let n1 = new Node(200);
console.log(n1.value); // Output: 200