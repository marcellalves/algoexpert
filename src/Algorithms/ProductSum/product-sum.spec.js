const productSum = require('./product-sum')

describe('Product Sum', () => {
  test('Sample Input should return Sample Output', () => {
    const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

    const result = productSum(array)

    expect(result).toEqual(12)
  })
})