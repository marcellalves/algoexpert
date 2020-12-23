const sut = require('./find-closest-value-in-bst-o-log-n-with-recursion')
const BST = require('../bst')

describe('Find Closest Value In BST', () => {
  test('Sample Input should return Sample Output', () => {
    const root = new BST(10)
    root.left = new BST(5);
    root.left.left = new BST(2);
    root.left.left.left = new BST(1);
    root.left.right = new BST(5);
    root.right = new BST(15);
    root.right.left = new BST(13);
    root.right.left.right = new BST(14);
    root.right.right = new BST(22);

    const result = sut(root, 12)

    expect(result).toEqual(13)
  })
})