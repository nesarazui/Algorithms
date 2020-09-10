//function kthToLastNode() takes an integer K and the headNode of a singly-linked list, and returns the k'th to last node in the list

function kthToLastNode (k, headNode) {
    let current = headNode
    let counter = 1
    let linkedListStorage = {}

    while (current) {
        linkedListStorage[counter] = current
        current = current.next
        counter ++
    }

    let keyToNode = (counter - k).toString()
    return linkedListStorage[keyToNode]
}

