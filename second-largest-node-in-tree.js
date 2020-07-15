

function largest (rootNode) {
    let current = rootNode

    while (current.right) {
        current = current.right
    }
    return current
}

function secondLargest (rootNode) {
    if (!rootNode || (!rootNode.right && !rootNode.left)) {
        throw new Error ('need at least 2 nodes')
    }

    let current = rootNode

    while (current) {
        if (current.left && !current.right){
            return largest(current.left)
        }

        if (current.right && !current.right.right && !current.right.left) {
            return current.value
        }

        current = current.right
    }
}