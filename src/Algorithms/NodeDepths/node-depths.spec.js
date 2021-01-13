const BST = require('../../DataStructures/BST/simplifyed-binary-tree')
const nodeDepthsSolution1 = require('./solution-1/node-depths')
const nodeDepthsSolution2 = require('./solution-2/node-depths')
const nodeDepthsSolution3 = require('./solution-3/node-depths')

describe('Node Depths', () => {
  test('Sample Input should return Sample Output - Solution 1', () => {
    const root = new BST(1)
    root.left = new BST(2)
    root.left.left = new BST(4)
    root.left.right = new BST(5)
    root.left.left.left = new BST(8)
    root.left.left.right = new BST(9)
    root.right = new BST(3)
    root.right.left = new BST(6)
    root.right.right = new BST(7)

    const result = nodeDepthsSolution1(root)
    
    expect(result).toEqual(16)
  })

  test('Sample Input should return Sample Output - Solution 2', () => {
    const root = new BST(1)
    root.left = new BST(2)
    root.left.left = new BST(4)
    root.left.right = new BST(5)
    root.left.left.left = new BST(8)
    root.left.left.right = new BST(9)
    root.right = new BST(3)
    root.right.left = new BST(6)
    root.right.right = new BST(7)

    const result = nodeDepthsSolution2(root)

    expect(result).toEqual(16)
  })

  test('Sample Input should return Sample Output - Solution 3', () => {
    const root = new BST(1)
    root.left = new BST(2)
    root.left.left = new BST(4)
    root.left.right = new BST(5)
    root.left.left.left = new BST(8)
    root.left.left.right = new BST(9)
    root.right = new BST(3)
    root.right.left = new BST(6)
    root.right.right = new BST(7)

    const result = nodeDepthsSolution3(root)

    expect(result).toEqual(16)
  })
})