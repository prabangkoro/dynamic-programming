const howSum = (target, nums) => {
  const table = Array(target + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (const num of nums) {
        if (i + num <= target) {
          table[i + num] = [...table[i], num]
        }
      }
    }
  }
  return table[target]
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4])) // [3, 4]
console.log(howSum(7, [5, 4, 3, 7])) // [3, 4]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null
