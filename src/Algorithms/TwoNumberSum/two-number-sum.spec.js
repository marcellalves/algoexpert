const twoNumberSumOnSquare = require('./solution-1/two-number-sum-o(n)square')
const twoNumberSumOn = require('./solution-2/two-number-sum-o(n)')
const twoNumberSumOnLogn = require('./solution-3/two-number-sum-o(nlog(n))')

const makeSample = () => {
  const input = [3, 5, -4, 8, 11, 1, -1, 6]
  const expectedOutput = [-1, 11]
  const targetSum = 10

  return {
    input,
    expectedOutput,
    targetSum
  }
}

describe('Two Sumber Sum', () => {
  test('Solution 1 - sample input should return sample output', () => {
    const { input, expectedOutput, targetSum } = makeSample()    
    const output = twoNumberSumOnSquare(input, targetSum)

    expect(output.sort()).toEqual(expectedOutput.sort())
  })

  test('Solution 2 - sample input should return sample output', () => {
    const { input, expectedOutput, targetSum } = makeSample()
    const output = twoNumberSumOn(input, targetSum)

    expect(output.sort()).toEqual(expectedOutput.sort())
  })

  test('Solution 3 = sample input should return sample output', () => {
    const { input, expectedOutput, targetSum } = makeSample()
    const output = twoNumberSumOnLogn(input, targetSum)

    expect(output.sort()).toEqual(expectedOutput.sort())
  })
})