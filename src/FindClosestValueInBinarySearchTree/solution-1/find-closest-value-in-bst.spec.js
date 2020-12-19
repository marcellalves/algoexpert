const sut = require('./find-closest-value-in-bst')
const BST = require('../binary-search-tree')

describe('Find Closest Value In BST', () => {
  test('Sample Input should return Sample Output', () => {
    const input = new BST(10)
    input.insert(5)
    input.insert(15)
    input.insert(2)
    input.insert(5)
    input.insert(13)
    input.insert(22)
    input.insert(1)
    input.insert(14)
    
    const target = 12
    const expectedOutput = 13 

    const result = sut(input, target)

    expect(result).toEqual(expectedOutput)
  })
})