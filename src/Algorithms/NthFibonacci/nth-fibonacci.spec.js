const nthFibonacci = require('./nth-fibonacci')

describe('Nth Fibonacci', () => {
  test('First Sample Input should return Sample Output', () => {
    const result = nthFibonacci(2)

    expect(result).toEqual(1)
  })

  test('Second Sample Input should return Sample Output', () => {
    const result = nthFibonacci(6)

    expect(result).toEqual(5)
  })
})
