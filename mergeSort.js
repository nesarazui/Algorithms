//MERGE SORT
const mergeSort = arr => {
    if (arr.length <= 1) return arr;
     
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
  };

  const merge = (left, right) => {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
       result.push(left[indexLeft])
       indexLeft++
      } else {
       result.push(right[indexRight])
       indexRight++
      }
    }
    return result.concat(left.slice(indexLeft))
           .concat(right.slice(indexRight))
   }


