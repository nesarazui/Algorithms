function quickSort (arr) {
    if (arr.length === 0) {
        return []
    }

    let left = []
    let right = []
    let pivot = arr[0]

    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        if (num < pivot) {
            left.push(num)
        }
        if (num > pivot) {
            right.push(num)
        }
    }

    return quickSort(left).concat(pivot).concat(right)
}