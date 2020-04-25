const indexOf = (needle, haystack) => {
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i] !== needle[j + i]) {
                break
            } else {
                if (j === needle.length - 1) {
                    return i
                }
            }
        }
    }
    return -1
}