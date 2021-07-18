// Question:
// Given grid with dimention m x n, m is width, n is height. Calculate how many
// possible moves with start at top-left and end at bottom-right. You can only
// moves down or right at a time.
const gridTraveler = (m, n, memo = {}) => {
  let key = [m, n].join()
  if (key in memo) return memo[key]

  if (m == 1 || n == 1) return 1

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
  return memo[key]
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(4, 5)) // 35
console.log(gridTraveler(30, 30)) // 30067266499541040
