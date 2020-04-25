//BINARY SEARCH TREE IMPLEMENTATION

class Tree {
    constructor() {
      this.head = null
    }
  
    addToTree(num) {
      let newNode = new Node(num)
      if (!this.head){
        this.head = newNode
        return
      } 
  
      let currentNode = this.head
      if (newNode.value < currentNode.value) {
        while (currentNode.left) {
          currentNode = currentNode.left
        }
        currentNode.left = newNode
  
      } else if(newNode.value > currentNode.value) {
       while (currentNode.right) {
          currentNode = currentNode.right
        }
        currentNode.right = newNode
      }
    }
  
  }
  
  class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  let newTree = new Tree()
  newTree.addToTree(5)
  newTree.addToTree(9)
  newTree.addToTree(3)
  newTree.addToTree(1)
  newTree.addToTree(8)
  console.log(newTree)