//given an unsorted array of scores and the top score, return a sorted array of scores in less than O(n log n) time


//O (n) run time using counting
const sortingScores = (arrayScore, highestPossibleScore) => {
    let countingArr = []

    for (let i = 0; i < arrayScore.length; i++) {
        let num = arrayScore[i] //num will represent an index number in countingArr

        if (!countingArr[num]) { //if array at index 'num' does not exist yet, add to array
            countingArr[num] = 1
        } else { //if it already exists, increment the value at that index by one
            countingArr[num] ++
    }
}

    let outputArr = []

    for (let i = countingArr.length - 1; i >= 0; i--) {
        if (countingArr[i]) { //if its value is NOT undefined
            if (countingArr[i] === 1) {
                outputArr.push(i)
            }
            else {
                for (let j = 1; j <= countingArr[i]; j++) {
                    outputArr.push(i)
                }
            }
        }
    }

    return outputArr

}

//
const sortedScores = (arrayScore, highestPossibleScore) => {
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0)

    arrayScore.forEach(score => {
        scoreCounts[score]++
    })

    let outputArr = []

    for (let i = highestPossibleScore; i >= 0; i--) {
        let count = scoreCounts[i]

        for (let j = 0; j < count; j++) {
            outputArr.push(i)
        }
    }

    return outputArr

}