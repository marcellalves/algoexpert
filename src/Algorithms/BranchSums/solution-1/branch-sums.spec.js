const BST = require('../../../DataStructures/BST/simplifyed-binary-tree')
const branchSums = require('./branch-sums')

describe('Branch Sums', () => {
  test('Sample Input should return Sample Output', () => {
    const root = new BST(1)
    root.left = new BST(2);
    root.left.left = new BST(4);
    root.left.left.left = new BST(8);
    root.left.left.right = new BST(9);
    root.left.right = new BST(5);
    root.left.right.left = new BST(10);
    root.right = new BST(3);
    root.right.left = new BST(6);
    root.right.right = new BST(7);

    const expectedOutput = [15, 16, 18, 10, 11]

    const result = branchSums(root)
    
    expect(result).toEqual(expectedOutput)
  })
})