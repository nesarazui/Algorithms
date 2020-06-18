// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.


//O (n) time and space
const getProductsOfAllIntsExceptAtIndex = (arr) => {

    if (arr.length <= 1) {
        throw new Error ('This function requires an array with at least 2 integers')
    }
    const output = []

    let productSoFar = 1
    // Looping through original array, assign the value of 'productSoFar' as the value at i in output array. 
    // Before moving to the next iteration update the value of productSoFar by multiplying it by the current value at index i.
    // This sets up the final output array with the product of all the integers that came prior to the current index
    for (let i = 0; i < arr.length; i++){
        output[i] = productSoFar
        productSoFar *= arr[i]
    }

    //reset back to 1 for the next loop
    productSoFar = 1

    // for each index, find the product of all the integers that come after that index. 
    // this can be kept track of by iterating from the end of the array and updating productSoFar accordingly.
    // for each index, the value of productSoFar can be multiplied to the value of the corresponding index in the output array 
    for (let i = arr.length - 1; i >= 0; i--) {
        output[i] *= productSoFar
        productSoFar *= arr[i]
    }

    return output

}