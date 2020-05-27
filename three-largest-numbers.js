//Input: array of integers (unsorted)
//Output: a sorted array of the three largest integers in input array


// O(n log n) 
const findThreeLargestNumbers = (arr) => {
    let copy = [...arr]
    copy.sort((a,b) => b - a) //n log n
    let final = copy.slice(0, 3)
    final.reverse()
    return final
}

//O(n)

const findThreeLargestNumbers = (arr) => {
    let firstHighest = -Infinity
    let secondHighest = -Infinity
    let thirdHighest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (num > firstHighest) {
             thirdHighest = secondHighest
             secondHighest = firstHighest
             firstHighest = num
             console.log(thirdHighest, secondHighest, firstHighest)
        } else if (num > secondHighest) {
           thirdHighest = secondHighest
           secondHighest = num
        } else if (num > thirdHighest) {
          thirdHighest = num
        }
    }
    let newArr = [thirdHighest, secondHighest, firstHighest]
    return newArr
}