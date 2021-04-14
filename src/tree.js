class AVLTree {
    constructor() {
       // Initialize a root element to null.
       this.root = null;
    }
 
    getBalanceFactor(node) {
       return Math.abs(this.getHeight(node.left) - this.getHeight(node.right));
    }
 
    getHeight(node) {
       let height = 0;
       if (node === null || typeof node == "undefined") {
          height = -1;
       } else {
          height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
       }
       return height;
    }
 
    insert(data) {
       let node = new this.Node(data);
       // Check if the tree is empty
       if (this.root === null) {
          // Insert as the first element 
          this.root = node;
          this.root.height = this.getBalanceFactor(this.root);
       } else {
          if(node.data<this.root.data){
              this.insert(this.root.left);
              //balance
          }
          else{
              this.insert(this.root.right);
              //balance
          }
       }
    }
    
    inOrder() {
       inOrderHelper(this.root);
    }
 }
 function balanceTree(node){

 }
 
 AVLTree.prototype.Node = class {
    constructor(data, left = null, right = null,height=null) {
       this.data = data;
       this.left = left;
       this.right = right;
       this.height = height;
    }
 };
  
 function inOrderHelper(root) {
    if (root !== null) {
       inOrderHelper(root.left);
       console.log(root.data);
       inOrderHelper(root.right);
    }
 }
 
 function rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
 }
 
 function rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
 }
 
 function rotationLR(node) {
    node.left = rotationRR(node.left);
    return rotationLL(node);
 }
 
function rotationRL(node) {
    node.right = rotationLL(node.right);
    return rotationRR(node);
}