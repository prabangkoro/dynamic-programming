const allConstruct = (targetWord, wordBanks) => {
  const table = Array(targetWord.length + 1).fill().map(() => [])
  table[0] = [[]]

  for (let i = 0; i <= targetWord.length; i++) {
    for (const word of wordBanks) {
      if (targetWord.slice(i, i + word.length) === word) {
        const newCombination = table[i].map(sub => [...sub, word])
        table[i + word.length].push(...newCombination)
      }
    }
  }

  return table[targetWord.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
// [ [ 'abc', 'def' ] ]

console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// []

console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// [
//   [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
//   [
//     'enter', 'a',
//     'p',     'ot',
//     'ent',   'p',
//     'o',     't'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'ot'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'o',
//     't'
//   ]
// ]

console.log(allConstruct('eeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
]))
// []
