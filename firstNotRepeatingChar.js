// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.

function firstNotRepeatingCharacter(s) {
    let map = new Map()
    

    for (let i = 0; i < s.length; i++){
        let char = s[i]
        
        if (map.has(char)) {
            map.set(char, map[char]++)
        } else {
            map.set(char, 1)
        }
    }
    
    for (let [key, value] of map) {
        if (value === 1) {
            return key
        }
    }
    return '_'
}