// Question:
// Given total (kg) and k options of items (ex. if k = 3, then items = 1kg, 2kg, 3kg).
// Calculate how many combinations of items to reach exactly total.
// constraint: each combinations neglect the order, so [3, 1, 1] is same with [1, 1, 3]

const knapsack = (total, k, memo = {}) => {
  const key = `${total};${k}`
  if (key in memo) return memo[key]
  if (k < 1 || total < 0) return 0
  if (total === 0) return 1

  memo[key] = knapsack(total - k, k, memo) + knapsack(total, k - 1, memo)
  return memo[key]
}

console.log(knapsack(1, 1))
console.log(knapsack(1, 2))
console.log(knapsack(1, 3))
console.log(knapsack(1, 4))
console.log('------')
console.log(knapsack(2, 1))
console.log(knapsack(2, 2))
console.log(knapsack(2, 3))
console.log(knapsack(2, 4))
console.log('------')
console.log(knapsack(3, 1))
console.log(knapsack(3, 2))
console.log(knapsack(3, 3))
console.log(knapsack(3, 4))
console.log('------')
console.log(knapsack(4, 1))
console.log(knapsack(4, 2))
console.log(knapsack(4, 3))
console.log(knapsack(4, 4))

console.log('------')
console.log(knapsack(3, 3))
console.log(knapsack(4, 4))
console.log(knapsack(1000, 100))
