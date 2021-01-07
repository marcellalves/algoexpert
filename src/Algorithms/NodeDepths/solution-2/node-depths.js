// O(n) time | O(h) space complexit, where h is the height of the tree
module.exports = (tree) => {
  return calculateNodeDepths(tree, 0)
}

function calculateNodeDepths(node, depth) {
  if (node === null) {
    return 0
  }

  return depth + calculateNodeDepths(node.left, depth + 1) + calculateNodeDepths(node.right, depth + 1)
} 
