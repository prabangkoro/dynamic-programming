const maxProfit = (prices) => {
  let maxGain = -1
  let minVal = 100001

  for (let p of prices) {
    if (p < minVal) {
      minVal = p
    } else {
      let profit = p - minVal
      maxGain = Math.max(profit, maxGain)
    }
  }

  return maxGain
}

console.log(maxProfit([7, 1, 2, 5])) // 4
console.log(maxProfit([7, 6, 5, 4])) // -1
console.log(maxProfit([1, 5, 1, 5, 1, 5])) // 4