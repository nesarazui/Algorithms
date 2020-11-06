
const removingAnagrams = (arr) => {
    let mySet = new Set()
    let final = []

    for (let i = 0; i < arr.length; i++){
        let currentStr = arr[i]
        let currentStrSorted = currentStr.split('').sort().join()

        if (!mySet.has(currentStrSorted)){
            mySet.add(currentStrSorted)
            final.push(currentStr)
        }
    }

    return final.sort()
}