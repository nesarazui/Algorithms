//Subsequence: a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements

//Determine if Array B is a valid subsequence of Array A (T/F)

const isValidSubseq = (arr, seq) => {
    let arrIdx = 0
    let seqIdx = 0
    while (arrIdx < arr.length && seqIdx < seq.length) {
        if (arr[arrIdx] === seq[seqIdx]) {
            seqIdx++     
        }
        arrIdx++
    }
    return seqIdx === seq.length
}