// Question:
// Given a target sum, and list of numbers, determine shortest combination from list
// of numbers that can reach target sum. If there are multiple shortest combination,
// you can return any.

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let bestResult = null
  for (let num of numbers) {
    const remainder = targetSum - num

    const result = bestSum(remainder, numbers, memo)
    if (result !== null) {
      const combinedResult = [...result, num]

      if (bestResult === null || combinedResult.length < bestResult.length) {
        bestResult = combinedResult
      }
    }
  }

  memo[targetSum] = bestResult
  return memo[targetSum]
}

console.log(bestSum(7, [2, 3, 4, 7])) // [7]
console.log(bestSum(8, [1, 2, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 5, 10, 25, 42])) // [25, 25, 25, 25]