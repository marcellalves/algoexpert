const binarySearchArray = require('./binary-search')

describe('Binary Search', () => {
  test('Sample Input should return Sample Output', () => {
    const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
    const target = 33

    const result = binarySearchArray(array, target)

    expect(result).toEqual(3)
  })
})
