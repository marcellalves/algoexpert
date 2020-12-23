const solution1 = require('./solution-1/find-closest-value-in-bst-o-log-n-with-recursion')
const solution2 = require('./solution-2/find-closest-value-in-bst-o-log-n-without-recursion')
const BST = require('./bst')

const makeTree = () => {
  const root = new BST(10)
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

  return root
}

describe('Find Closest Value In BST', () => {
  test('Solution 1 - Sample Input should return Sample Output', () => {
    const root = makeTree()
    
    const result = solution1(root, 12)

    expect(result).toEqual(13)
  })

  test('Solution 2 - Sample Input should return Sample Output', () => {
    const root = makeTree()
    
    const result = solution2(root, 12)

    expect(result).toEqual(13)
  })
})