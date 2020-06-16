// Given an array of stock prices, where the indices are the time (in minutes) past trade opening time,
// and the values are the price of one share of stock:
// Write an efficient function that takes stockPrices and returns the best profit that could have been made 
// from one purchase and one sale of one share of stock.


//O (n^2)
const getMaxProfit = (stockPrices) => {

    let profit = null
    let purchase = null //should be as low as possible
    let sale = null //should be as high as possible

    for (let i = 0; i < stockPrices.length; i++) {
        let purchasePrice = stockPrices[i]
        let currentHighestSalePrice = 0

        for (let j = i + 1; j < stockPrices.length; j++) {
            let salePrice = stockPrices[j]

            if (currentHighestSalePrice < salePrice) {
                currentHighestSalePrice = salePrice
            }


        }
        if (profit < (currentHighestSalePrice - purchasePrice)){
            profit = currentHighestSalePrice - purchasePrice
            purchase = purchasePrice
            sale = currentHighestSalePrice
        }
    }

    return profit

}

//O (n)
const getMaxProfitEfficiently = (stockPrices) => {
    let maxProfit = 0
    let minPrice = stockPrices[0]

    for (let i = 0; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i]

       //finding most updated minPrice
       minPrice = Math.min(minPrice, currentPrice) 

       //finding potential profit given current numbers
        let potentialProfit = currentPrice - minPrice

        //update maxProfit with the higher of the profit options
        maxProfit = Math.max(maxProfit, potentialProfit)

return maxProfit

}