//write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// The function should find all triplets in the array that sum up to the target sum and return a 2d array of all these triplets.The numbers in each triplet 
// should be ordered in ascending order, and the triplets themsleves should be ordered in ascending order with respect to the numbers they HTMLBodyElement. If 
// no three numbers sum up to the target sum, the function should return an empty array.

const ThreeNumSum = (arr, target) => {
    const myArr = arr.sort((a,b) => a - b)
    const finalArr = []
    for (let i = 0; i < myArr.length - 2; i++) { // i, left, and right will be the three pointers used for calculating the sums in the array
        let left = i + 1
        let right = myArr.length - 1
        while (left < right) {
            let currentSum = myArr[i] + myArr[left] + myArr[right]
            if (currentSum === target) {
                finalArr.push( [myArr[i], myArr[left], myArr[right]] )
                left ++
                right --
            } else if (currentSum < target) {
                left ++
            } else if (currentSum > target) {
                right --
            }
        }
    }
    return finalArr
}