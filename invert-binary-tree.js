function invertBinaryTreeA(tree) {
    let queue = [tree];
      let currLeftNode;
      while(queue.length > 0){
          currLeftNode = queue.shift();
          let temp = currLeftNode.left;
          currLeftNode.left = currLeftNode.right;
          currLeftNode.right = temp;
          currLeftNode.left && queue.push(currLeftNode.left);
          currLeftNode.right && queue.push(currLeftNode.right);
          
      }
  }

  //

  function invertBinaryTreeB(tree) {
    // Write your code here.
      let queue = []
      queue.push(tree)
      
      while (queue.length){
          let currentNode = queue.pop()
          
          if (currentNode){
              let swappedNode = swapNodes(currentNode)
              queue.push(swappedNode.left)
              queue.push(swappedNode.right)
          }
      }
  }
  
  function swapNodes (node) {
      let leftNode = node.left
      let rightNode = node.right
      node.left = rightNode
      node.right = leftNode
      return node
  }
  