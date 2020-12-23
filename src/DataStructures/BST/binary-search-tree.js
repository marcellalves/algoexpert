module.exports = class BST {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(value) {
    const newNode = new Node(value)
    this.recInsert(newNode, this.root)
  }

  recInsert(newNode, currentNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode
      } else {
        this.recInsert(newNode, currentNode.left)
      }
    }

    if (newNode.value >= currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = newNode
      } else {
        this.recInsert(newNode, currentNode.right)
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}