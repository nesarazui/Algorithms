//Write a function to check that a binary tree is a valid binary search tree. 

// Sample Binary Tree node class:
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

  //Using DFS to check validity

  function checkValidity (rootVal) {
      let stack = []

      //establish bounds for the rootVal and push into stack
      stack.push({node: rootVal,
                  upperBound: Infinity,
                  lowerBound: -Infinity
                })

    //DFS.             
    while (stack.length){
        let {node, upperBound, lowerBound} = stack.pop()

        //Check each current node obj against its lower/upper bounds (after popping from stack),
        if (node <= lowerBound || node >= upperBound) {
            return false
        }

        //if valid, check its left/right nodes (push onto stack with updated boundaries), repeat as long as there is something in stack to check
        if (node.left) {
            stack.push({
                    node: node.left,
                    upperBound: node.value,
                    lowerBound: lowerBound
                })
        }

        if (node.right) {
            stack.push({
                    node: node.right,
                    upperBound: upperBound,
                    lowerBound: node.value
            })
        }
    }
    //tree is valid since we never returned false during loop
    return true
  }