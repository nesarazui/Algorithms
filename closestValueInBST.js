const findClosest = (bst, target) => {
    return findNum (bst, target)
}

const findNum = (bst, target, smallest = Infinity) => {
    if (!bst.value) {
        return smallest
    }

    //compare current node - target against target - smallest; if current node - target is
    //less than target - smallest, update value of smallest with current node

    if (Math.abs(target - bst.value) < Math.abs(smallest - target)) {
        smallest = bst.value
    }

    //traverse down the tree using recursion to find the closest value

    if (target > bst.value) {
        return findNum(bst.right, target, smallest)
    } else if (target < bst.value) {
        return findNum(bst.left, target, smallest)
    } else {
        return smallest
    }
}