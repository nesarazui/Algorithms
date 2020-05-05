const smallestDifference (arr1, arr2) => {
    let smallest = Infinity
    let current = Infinity
    let final = []

    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)

    let left = 0
    let right = 0

    while ( left < arr1.length && right < arr2.length ) {
        let leftNum = arr1[left]
        let rightNum = arr2[right]
        if (leftNum < rightNum) { 
            current = rightNum - leftNum 
            left ++
        } else if (leftNum > rightNum) {
            current = leftNum - rightNum
            right ++
        } else {
            return [leftNum, rightNum]
        }

        if (smallest > current) {
            smallest = current
            final = [leftNum, rightNum]
        }
    }
    return final 
}