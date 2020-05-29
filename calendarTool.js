//Merging Meeting Times: A function for merging meeting times given everyone's schedules

//Example Input:
// [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
//   ]
//Example Output:
// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]


function mergeRanges(arr) {
    let holding = []
    
    arr = arr.sort((a, b) => {
        return a.startTime - b.startTime;
    })

    for (let i = 0; i < arr.length; i++) {
        if (holding.length < 1) {
            holding.push(arr[i])
        }
        else if (holding[holding.length - 1]['endTime'] >= arr[i]['startTime']) {
            if (holding[holding.length - 1]['endTime'] < arr[i]['endTime']) {
              holding[holding.length - 1]['endTime'] = arr[i]['endTime']
            }
        } else {
            holding.push(arr[i])
        }
    }
    return holding

}
