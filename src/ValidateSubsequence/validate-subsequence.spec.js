const isValidSubsequence = require('./solution-1/valid-subsequence-o(n)')

describe('Validate Subsequence', () => {
  test('Valid subsequence should return true', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [1, 6, -1, 10]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeTruthy()
  })

  test('Invalid subsequence should return false', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [1, 6, 10, -1]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeFalsy()
  })

  test('Identical arrays should return true', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeTruthy()
  }) 
})