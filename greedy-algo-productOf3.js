//Given an array of integers, find the highest product you can get from 3 of the integers
//Takes into consideration cases where there are negative integers
//O (n)
const highestProductOf3 = (arr) => {
    if (arr.length < 3) {
        throw new Error('Less than 3 items')
    }

    let highest = Math.max(arr[0], arr[1])
    let lowest = Math.min(arr[0], arr[1])
    let highestProductOf2 = arr[0] * arr[1]
    let lowestProductOf2 = arr[0] * arr[1]
    let highestProductOf3 = arr[0] * arr[1] * arr[2]

    for (let i = 2; i < arr.length; i++){
        let num = arr[i]

        highestProductOf3 = Math.max(
            highestProductOf3,
            highestProductOf2 * num,
            lowestProductOf2 * num
        )

        highestProductOf2 = Math.max(
            highestProductOf2,
            highest * num,
            lowest * num
        )

        lowestProductOf2 = Math.min(
            lowestProductOf2,
            highest * num,
            lowest * num
        )

        highest = Math.max(
            highest, 
            num
        )

        lowest = Math.min(
            lowest, 
            num
        )


    }

    return highestProductOf3
}