const BST = require('./binary-search-tree')

describe('Binary Search Tree', () => {
  test('New BST should create the root node', () => {
    const sut = new BST(10)
    const result = sut.root

    expect(result.value).toEqual(10)
    expect(result.left).toBeNull()
    expect(result.right).toBeNull()
  })

  test('Insert value smaller than root should create left node', () => {
    const sut = new BST(10)
    sut.insert(5)
    const result = sut.root.left

    expect(result.value).toEqual(5)
  })

  test('Insert value greater than root shoud create right node', () => {
    const sut = new BST(10)
    sut.insert(15)
    const result = sut.root.right

    expect(result.value).toEqual(15)
  })

  test('Should build a multi-leve tree correctly', () => {
    const sut = new BST(10)
    sut.insert(5)
    sut.insert(15)
    sut.insert(2)
    sut.insert(5)
    sut.insert(13)
    sut.insert(22)
    sut.insert(1)
    sut.insert(14)
    const result = sut.root

    expect(result.value).toEqual(10)
    expect(result.left.value).toEqual(5)
    expect(result.right.value).toEqual(15)
    expect(result.left.left.value).toEqual(2)
    expect(result.left.right.value).toEqual(5)
    expect(result.right.left.value).toEqual(13)
    expect(result.right.right.value).toEqual(22)
    expect(result.left.left.left.value).toEqual(1)
    expect(result.left.left.right).toBeNull()
    expect(result.left.right.left).toBeNull()
    expect(result.left.right.right).toBeNull()
    expect(result.right.left.left).toBeNull()
    expect(result.right.left.right.value).toEqual(14)
    expect(result.right.right.left).toBeNull()
    expect(result.right.right.right).toBeNull()
  })
})
