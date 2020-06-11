//Brute Force
// Write an efficient function that checks whether any permutation of an input string is a palindrome. 

//Function that provides an array of all possible permutations of a word, using recursion
const perm = (str, strPerm, arr) => {

    if (str.length === 0) {
        return arr.push(strPerm)
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i] 

        let leftoverChar = str.substring(0, i) + str.substring(i)

        strPerm = strPerm + char

        perm(leftoverChar, strPerm, arr)
        

        
    }
    return isPalindrome(arr) 
}

//Function that confirms whether any word in array is a palindrome
const isPalindrome = (arr) => {
    const obj = {}

    arr.map((word) => {
        obj[word] = false
    })

    for (let key in obj) {
        let left = 0
        let right = key.length - 1
        while (left <= right) {
            if (left === right) {
                obj[key] = true
                return true
            } else if (key[left] === key[right]) {
                left ++
                right --
            }  else {
                break 
            }
        }

        if (obj[key] === true) {
            return true
        }
    }
  return false
}

//Optimized Solution

const efficientIsPalindrome = (str) => {
    const mySet = new Set()

    for (let char of str) {
        if (mySet.has(char)) {
            mySet.delete(char)
        } else {
            mySet.add(char)
        }
    }

    if (mySet.size > 1) {
        return false
    } else {
        return true
    }
}