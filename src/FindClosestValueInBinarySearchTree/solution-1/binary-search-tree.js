module.exports = class BST {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {

  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}