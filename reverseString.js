//write a function that takes an array of chars and reverses in place

function reverse(arrayOfChars) {
    let left = 0
    let right = arrayOfChars.length - 1
    
    while (left < right) {
      let holding = arrayOfChars[left]
      arrayOfChars[left] = arrayOfChars[right]
      arrayOfChars[right] = holding
      left ++
      right --
    }
    return arrayOfChars
  }