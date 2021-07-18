// Question:
// Given a target sum, and list of numbers, determine if any combination from
// list of numbers can reach exactly target sum.

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum == 0) return true
  if (targetSum < 0) return false

  for (let n of numbers) {
    let newTargetSum = targetSum - n
    if (canSum(newTargetSum, numbers, memo)) {
      memo[targetSum] = true
      return true
    }
  }

  memo[targetSum] = false
  return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 4, 3, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false