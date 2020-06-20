//Write a function for doing an in-place shuffle of an array. 
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

function getRandom(floor, ceiling) {
    const random = Math.floor(Math.random() * (ceiling - floor + 1) + floor) //formula to get a random integer between two values inclusive
    return random
}

function shuffleInPlace (arr) {
    if (arr.length < 2) {
        throw new Error ('Needs at least 2 integers')
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let randomIndex = getRandom(i, arr.length - 1)


        if (i !== randomIndex) {
        let valueAtBeginning = arr[i]
        let valueAtRandomIndex = arr[randomIndex]
        arr[i] = valueAtRandomIndex
        arr[randomIndex] = valueAtBeginning}
    }
}
