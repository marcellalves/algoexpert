const findThreeLargestNumbersSolution1 = require('./solution-1/find-three-largest-numbers-quick-and-dirty')
const findThreeLargestNumbersSolution2 = require('./solution-2/find-three-largest-numbers-algo-expert-solution')

describe('Solution 1', () => {
  test('Sample Input should return Sample Output', () => {
    const input = [141, 1, 17, -7, - 17, -27, 18, 541, 8, 7, 7]

    const result = findThreeLargestNumbersSolution1(input)
    
    expect(result).toEqual([18, 141, 541])
  })

  test('Sample Input with negative numbers', () => {
    const input = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]

    const result = findThreeLargestNumbersSolution1(input)

    expect(result).toEqual([-2, -1, 7])
  })
})

describe('Solution 2', () => {
  test('Sample Input should return Sample Output', () => {
    const input = [141, 1, 17, -7, - 17, -27, 18, 541, 8, 7, 7]

    const result = findThreeLargestNumbersSolution2(input)
    
    expect(result).toEqual([18, 141, 541])
  })

  test('Sample Input with negative numbers', () => {
    const input = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]

    const result = findThreeLargestNumbersSolution2(input)

    expect(result).toEqual([-2, -1, 7])
  })
})