const nthFibonacciSolution1 = require('./solution-1/nth-fibonacci')
const nthFibonacciSolution2 = require('./solution-2/nth-fibonacci')

describe('Nth Fibonacci', () => {
  test('Solution 1 - First Sample Input should return Sample Output', () => {
    const result = nthFibonacciSolution1(2)

    expect(result).toEqual(1)
  })

  test('Solution 1 - Second Sample Input should return Sample Output', () => {
    const result = nthFibonacciSolution1(6)

    expect(result).toEqual(5)
  })
  
  test('Solution 2 - First Sample Input should return Sample Output', () => {
    const result = nthFibonacciSolution2(2)

    expect(result).toEqual(1)
  })

  test('Solution 2 - Second Sample Input should return Sample Output', () => {
    const result = nthFibonacciSolution2(6)

    expect(result).toEqual(5)
  })
})
