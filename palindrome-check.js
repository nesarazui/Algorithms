//function that takes in a non-empty string + returns T/F depending on whether the string is a palindrome

function isPalindrome(string) {
    string = string.toLowerCase()
      let right = string.length - 1
      let left = 0
      
      for (let i = 0; i <= (Math.floor(string.length/2)); i++) {
          if (string[left] !== string[right]) {
              return false
          } else {
              right --
              left ++
          }
    }
    return true
}

