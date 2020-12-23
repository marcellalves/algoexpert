const isValidSubsequence = require('./validate-subsequence-with-array-o-n')

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

  test('If the sequence array length is greater than the original array, should return false', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeFalsy()
  })

  test('If the sequence array has any element outside the main array, should return false', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 23, 6, -1, 8, 10]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeFalsy()
  })

  test('Duplicated elements should be considered as unique elements which interfere in the sequence', () => {
    const array = [5, 1, 22, 25, 6, -1, 8, 10]
    const sequence = [5, 1, 22, 22, 6, -1, 8, 10]
    const result = isValidSubsequence(array, sequence)

    expect(result).toBeFalsy()
  })
})