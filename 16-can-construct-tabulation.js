const canConstruct = (targetWord, wordBanks) => {
  const table = Array(targetWord.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetWord.length; i++) {
    if (table[i] === false) continue
    for (const word of wordBanks) {
      if (targetWord.slice(i, i + word.length) === word) {
        table[i + word.length] = true
      }
    }
  }

  return table[targetWord.length]
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
