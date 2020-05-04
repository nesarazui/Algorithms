//Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// If any two nums in the input array sum up to the target sum, the function should return them in an array, in any order .
// If no two nums add up to the target sum, the function should return an empty array.

const twoNumSum = (array, targetSum) => {
    let ordered = array.sort((a,b) => (a - b)) 
    let left = 0
    let right = ordered.length - 1

    while (left < right) {
        let leftVal = ordered[left]
        let rightVal = ordered[right]
        let sum = leftVal + rightVal
        if (sum === targetSum) {
            return [leftVal, rightVal]
        } else if (sum > targetSum) {
            right --
        } else {
            left ++
        }
    }

    return []
}


