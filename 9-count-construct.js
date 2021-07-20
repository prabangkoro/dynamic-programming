const countConstruct = (targetWord, wordBanks, memo = {}) => {
  if (targetWord in memo) return memo[targetWord]
  if (targetWord === '') return 1

  let count = 0
  for (const word of wordBanks) {
    if (targetWord.indexOf(word) === 0) {
      const nextTarget = targetWord.slice(word.length)
      count += countConstruct(nextTarget, wordBanks, memo)
    }
  }

  memo[targetWord] = count
  return count
}

console.log(countConstruct('purple', ['pur', 'ple', 'p', 'ur', 'le'])) // 9
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
])) // 0