class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  get currentNode() {
    return this._currentNode
  }

  set currentNode(node) {
    this._currentNode = node 
  }

  get stack() {
    return this._stack
  }

  set stack(stack) {
    this._stack = stack
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  addChild(node) {
    this.children.push(node)
  }  

  depthFirstSearch(array) {
    if (this._currentNode === null) {
      return
    }

    array.push(this._currentNode.name)
    this._stack = this._stack.concat(this._currentNode.children)
    const nextNode = this._stack.pop()

    return this.depthFirstSearch(nextNode, array) 
  }
}

module.exports = Node
