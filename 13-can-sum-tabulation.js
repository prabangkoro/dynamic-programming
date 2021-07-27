const canSum = (target, nums) => {
  const table = Array(target + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= target; i++) {
    if (table[i] === false) continue
    for (let num of nums) {
      if (i + num <= target) {
        table[i + num] = true
      }
    }
  }
  return table[target]
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 4, 3, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false