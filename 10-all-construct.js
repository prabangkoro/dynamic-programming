const allConstruct = (targetWord, wordBanks, memo = {}) => {
  if (targetWord in memo) return memo[targetWord]
  if (targetWord === '') return [[]]

  let allWays = []
  for (const word of wordBanks) {
    if (targetWord.indexOf(word) === 0) {
      const nextTarget = targetWord.slice(word.length)
      const nextResult = allConstruct(nextTarget, wordBanks, memo)

      const entries = nextResult.map(i => [word, ...i])
      allWays.push(...entries)
    }
  }

  memo[targetWord] = allWays
  return allWays
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
])) // 0