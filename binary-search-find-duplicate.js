// Given: an array of integers that are in range 1..n; the array has a length of n + 1
// Write a function which finds an integer that appears more than once in the array, optimizing for space 
// (If there are multiple duplicates, you only need to find one of them.)

//Space: O (n) & Time: O (n)
//using an object
const findDuplicate = (arr) => {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (!obj[num]) {
            obj[num] = true
        } else {
            return num
        }
    }
}

//using a set
const findDuplicate = (arr) => {
    let numberSet = new Set()

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]

        if (numberSet.has(num)) {
            return num
        } else {
            numberSet.add(num)
        }
    }
}

// O (1) space, O (n^2) time
const findDuplicate = (nums) => {
    for (let needle = 1; needle < nums.length; needle++) {
        let hasBeenSeen = false
        for (let i = 0; i < nums.length; i++) {
            let number = nums[i]
            if (needle === number) {
                if (hasBeenSeen) {
                    return number
                } else {
                    hasBeenSeen = true
                }
            }
        }
    }
}



// Optimized for Space: O (1) space; O (n log n) time
const findDuplicate = (arr) => {
    let lower = 1
    let higher = arr.length - 1

    while (lower < higher) {
        let mid = Math.floor(lower + (higher - lower)/2)
        let ideal = mid - lower + 1
        let actual = 0
        arr.forEach((num) => {
            if (num >= lower && num <= mid){
                actual ++
            }
        })

        if (actual > ideal) {
            higher = mid
        } else {
            lower = mid + 1
        }
    }

    return lower
}