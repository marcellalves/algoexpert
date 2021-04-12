const findThreeLargestNumbers = require('./find-three-largest-numbers')

describe('Find Three Largest Numbers', () => {
  test('Sample Input should return Sample Output', () => {
    const input = [141, 1, 17, -7, - 17, -27, 18, 541, 8, 7, 7]

    const result = findThreeLargestNumbers(input)
    
    expect(result).toEqual([18, 141, 541])
  })
})