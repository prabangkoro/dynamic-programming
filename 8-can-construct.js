const canConstruct = (targetWord, wordBanks, memo = {}) => {
  if (targetWord in memo) return memo[targetWord]
  if (targetWord === '') return true

  for (const word of wordBanks) {
    if (targetWord.indexOf(word) === 0) {
      const nextTarget = targetWord.slice(word.length)
      if (canConstruct(nextTarget, wordBanks, memo)) {
        memo[targetWord] = true
        return true
      }
    }
  }

  memo[targetWord] = false
  return false
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])) // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
])) // false