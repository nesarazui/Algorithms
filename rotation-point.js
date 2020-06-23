
//Input: a mostly ordered array of dictionary words. The words begin at a random alphabet and continue till the end, and then begin from the beginning of the alphabet until it reaches the random alphabet
//Write a function for finding the index of the 'rotation point'
// const words = [
//     'ptolemaic',
//     'retrograde',
//     'supplant',
//     'undulate',
//     'xenoepist',
//     'asymptote',  // <-- rotates here!
//     'babka',
//     'banoffee',
//     'engender',
//     'karpatka',
//     'othellolagkage',
//   ];


function findRotationPoint(words) {
    //establishing lower and upper boundaries for search
    let floorIdx = 0
    let ceilingIdx = words.length - 1
    
    //loop as long as floorIdx is less than ceilingIdx
    while (floorIdx < ceilingIdx) {

    //if we're looking at just 2 elements in the window, value at ceilingIdx represents the rotational point
      if (floorIdx + 1 === ceilingIdx) {
        return ceilingIdx
      }
      
      // calculate midpoint value based on updated floorIdx or ceilingIdx from previous iteration
      let mid = Math.floor ((ceilingIdx - floorIdx) / 2)
      let midIdx = floorIdx + mid
      let midVal = words[midIdx]
      
      //if the guess word (midVal) is greater than or equal to the word at beginning of array, we haven't reached turning point yet
      //and will need to look at values past the midVal. Update floorIdx to midIdx
      if (midVal >= words[floorIdx]) {
        floorIdx = midIdx
      } 
      // midVal is lesser than word at beginning of array, so we've gone too far - the rotational point comes before midVal
      //adjust ceilingIdx to midIdx
      else {
        ceilingIdx = midIdx
      }
    }
  }

