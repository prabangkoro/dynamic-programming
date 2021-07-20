const fib = (n) => {
  const ans = Array(n + 1).fill(0)
  ans[1] = 1
  for (let i = 2; i <= n; i++) {
    ans[i] = ans[i - 1] + ans[i - 2]
  }

  return ans[n]
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(10))
console.log(fib(50))