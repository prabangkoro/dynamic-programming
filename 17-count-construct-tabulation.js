const countConstruct = (targetWord, wordBanks) => {
  const table = Array(targetWord.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i <= targetWord.length; i++) {
    if (table[i] === 0) continue
    for (const word of wordBanks) {
      if (targetWord.slice(i, i + word.length) === word) {
        table[i + word.length] += table[i]
      }
    }
  }

  return table[targetWord.length]
}

console.log(countConstruct('purple', ['pur', 'ple', 'p', 'ur', 'le'])) // 4
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
