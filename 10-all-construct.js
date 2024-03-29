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

console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
  'eeeeeee'
]))
// []