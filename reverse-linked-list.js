//reverse a linked list in place
//input: head of list
//output: new head of the list (former tail)

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

//a -> b -> c
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')

a.next = b
b.next = c


function reverseLinkedList (headNode) {
    let current = headNode    
    let prev = null           
    let next = null           


    while (current){ 
        next = current.next   
        current.next = prev   
        prev = current        
        current = next        
       
    }

    return prev
}