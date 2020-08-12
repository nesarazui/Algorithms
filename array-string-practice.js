//Implement an algorithm to determine if a string has all unique characters, not using an additional data structure

const isUnique = (str) => {
    let cache = {}

    for (char of str) {
        if (!cache[char]) {
            cache[char] = true
        } else {
            return false
        }
    }

    return true
}

//Given two strings, write a method to decide if one is a permutation of the other

const isPerm = (strA, strB) => {
    if (strA.length !== strB.length) {
        return false
    }

    let cache = {}
    for (char of strA) {
        if (!cache[char]) {
            cache[char] = 1
        } else {
            let num = cache[char]
            cache[char] = num + 1
        }
    }

    for (char of strB) {
        if (cache[char]) {
            let num = cache[char]
            cache[char] = num - 1
            if (cache[char] < 0) {
                return false
            }
        } else {
            return false
        }
    }

    return true
}

// Write a method to replace all spaces in a string with '%20'. 
//You may assume that the string has sufficient space at the end to hold the additonal characters, and that you are given the 'true' length of the string.

const urlIfy = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (i !== str.length - 1 && str[i] === ' ') {
            newStr += '%20'
        } else {
            newStr += str[i]
        }
    }

    return newStr
}

