// Question:
// Given a target sum, and list of numbers, determine any combination from list
// of numbers that can reach target sum. You can return any set of combination.

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (let n of numbers) {
    let newTargetSum = targetSum - n

    let result = howSum(newTargetSum, numbers, memo)
    if (result !== null) {
      memo[targetSum] = [...result, n]
      return memo[targetSum]
    }
  }

  memo[targetSum] = null
  return null
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 4, 3, 7])) // [3, 4]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null