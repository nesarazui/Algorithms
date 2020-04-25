//IMPLEMENTING A QUEUE

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }

  insert(val) { 
    let newNode = new Node(val)
    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    }
    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.tail = newNode
    }
  }

  retrieve() {
    if (this.head) {
      let currentHead = this.head
      this.head = this.head.next
      return currentHead
    } else {
      return null
    }
  }
}


class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}


let myQueue = new Queue()
myQueue.insert(1)
myQueue.insert(2)
myQueue.insert(3)
myQueue.retrieve()
console.log(myQueue)