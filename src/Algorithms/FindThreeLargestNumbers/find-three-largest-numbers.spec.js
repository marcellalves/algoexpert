const findThreeLargestNumbers = require('./find-three-largest-numbers')

describe('Find Three Largest Numbers', () => {
  test('Sample Input should return Sample Output', () => {
    const input = [141, 1, 17, -7, - 17, -27, 18, 541, 8, 7, 7]

    const result = findThreeLargestNumbers(input)
    
    expect(result).toEqual([18, 141, 541])
  })

  test('Sample Input with negative numbers', () => {
    const input = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]

    const result = findThreeLargestNumbers(input)

    expect(result).toEqual([-2, -1, 7])
  })
})