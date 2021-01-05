const BST = require('../../../DataStructures/BST/simplifyed-binary-tree')
const nodeDepths = require('./node-depths')

describe('Node Depths', () => {
  test('Sample Input should return Sample Output', () => {
    const root = new BST(1)
    root.left = new BST(2)
    root.left.left = new BST(4)
    root.left.right = new BST(5)
    root.left.left.left = new BST(8)
    root.left.left.right = new BST(9)
    root.right = new BST(3)
    root.right.left = new BST(6)
    root.right.right = new BST(7)

    const result = nodeDepths(root)
    
    expect(result).toEqual(16)
  })
})