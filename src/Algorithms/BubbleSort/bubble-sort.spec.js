const bubbleSort = require('./bubble-sort')

describe('Bubble Sort Algorithm', () => {
  test('Sample Input should return Sample Output', () => {
    const array = [8, 5, 2, 9, 5, 6, 3]

    const result = bubbleSort(array)

    expect(result).toEqual([2, 3, 5, 5, 6, 8, 9])
  })
})
