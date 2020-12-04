const twoNumberSum = require('./two-number-sum')

describe('Two Sumber Sum', () => {
  test('Sample input should return sample output', () => {
    const input = [3, 5, -4, 8, 11, 1, -1, 6]
    const expectedOutput = [-1, 11]
    const output = twoNumberSum(input, 10)

    expect(output.sort()).toEqual(expectedOutput.sort())
  })
})