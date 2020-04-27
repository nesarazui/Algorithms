//Implement a priority queue with 3 methods:
// insert(data, priority) -- inserts data into the priority queue with the given priority
// peek() -- returns the value of the item with the highest priority without removing it from the priority queue
// popMax() -- returns the value of the item with the highest priority and also removes it from the priority queue

//Node
class Node {
    constructor(data, priority) {
        this.data = data
        this.priority = priority
        this.next = null
    }
}

//Priority Queue
class PriorityQueue { //Time Complexity: O(n), where n is the number of nodes in the priority queue
    constructor() {
        this.first = null
    }

    insert(data, priority) {
        let newItem = new Node(data, priority)
        if (!this.first || this.first.priority < priority) { // if there is nothing in the PQ, or if current First's priority is less than the incoming priority
            newItem.next = this.first //establishes newItem's next as either null or the current First
            this.first = newItem //the newItem goes to the head of the line (becomes the current First)
        } else { //if current first's priority is greater than or equal to incoming priority - the below determines where to insert newItem
            let currentNode = this.first 
            while (currentNode.next && currentNode.next.priority >= priority) //traverse queue by updating currentNode to its next as long as it has a next (truthy) and its next's priority is greater than or equal to incoming priority
            currentNode = currentNode.next
        }
            newItem.next = currentNode.next //currentNode's next has a lower priority than incoming priority, so this will place newItem BEFORE currentNode's next
            currentNode.next = newItem //and currentNode's next is now the newItem

    }

    peek() { //Time Complexity: O(1), constant
        return this.first.data
    }

    popMax() { //Time Complexity: O(1), constant
        let currentFirst = this.first
        this.first = this.first.next
        return currentFirst.data
    }
}