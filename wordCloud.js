//build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.
// Write code that takes a long string and builds its word cloud data in a map,
// where the keys are words and the values are the number of times the words occurred.

//approach without capitalization considerations

const isAlpha = (char) => {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    return alpha.indexOf(char) >= 0 //returns T if character is alphabet, F if not
}

const wordParser = (str) => {
    const words = []
    let startIndex = 0
    let wordLength = 0

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        let alpha = isAlpha(char)

        if (alpha) { //if character is an alphabet
            if (wordLength === 0) {
                startIndex = i
            }
                wordLength ++
        } 
        
        if (!alpha || i === str.length - 1){ //character not alphabet, meaning word is complete and can be added to words array
            let sliced = str.slice(startIndex, startIndex + wordLength)
            words.push(sliced)
            wordLength = 0
        }
    }

    return wordCloudBuilder(words)
}

const wordCloudBuilder = (arr) => {
    const wordMap = new Map()

    for (let i = 0; i < arr.length; i++) { //add each word into map, keeping a count of the number of times repeated as its value
        let word = arr[i]

        if (!wordMap.has(word)) {
            wordMap.set(word, 1)
        } else {
            wordMap.set(word, wordMap.get(word) + 1)
        }
    }

    return wordMap
}