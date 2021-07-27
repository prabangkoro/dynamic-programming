const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null)
  table[0] = []

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (const num of nums) {
        if (i + num <= target) {
          const newCombinationLength = table[i].length + 1
          if (table[i + num] !== null && table[i + num].length <= newCombinationLength) {
            continue
          } else {
            table[i + num] = [...table[i], num]
          }
        }
      }
    }
  }
  return table[target]
}

console.log(bestSum(7, [2, 3, 4, 7])) // [7]
console.log(bestSum(8, [1, 2, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 5, 10, 25, 42])) // [25, 25, 25, 25]
