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

  //
  //

  function reverseWords(message) {
        reverseCharacters(message, 0, message.length - 1)
        let currentWordStartIndex = 0
        for (let i = 0; i <= message.length; i++) {
            if (i === message.length || message[i] === ' ') {
                reverseCharacters(message, currentWordStartIndex, i - 1)
                currentWordStartIndex = i + 1
            }
        }

  }

  function reverseCharacters(message, left, right) {
    while (left < right) {
        let holding = message[left]
        message[left] = message[right]
        message[right] = holding
        left ++
        right --
      }
  }