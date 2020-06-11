//Build a feature for choosing two movies whose total runtimes will equal the exact flight length

//Write a function that takes an integer flightLength (in minutes) and an array of integers
// movieLengths (in minutes) and returns a boolean indicating whether there are two numbers
// in movieLengths whose sum equals flightLength

//assumptions: users will watch exactly 2 movies; each movie must be unique (can't repeat same movie twice), optimize for runtime over memory

//input: flightLength integer; movieLengths array
//output: t/f


//flightLength: 120 minutes
//movieLengths: [360, 15, 20, 100, 60]

const moviesOnFlight = (flightTime, movieArray) => {

    const movieSet = new Set()

    for (let i = 0; i < movieArray.length; i++) {
        const first = movieArray[i]
        const second = flightTime - first

        if (movieSet.has(second)) {
            return true
        }

        movieSet.add(first)
    }

    return false
}
