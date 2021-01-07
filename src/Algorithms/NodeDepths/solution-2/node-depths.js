// O(n) time | O(h) space complexit, where h is the height of the tree
function calculateNodeDepths (node, depth = 0) {
  if (node === null) {
    return 0
  }

  return depth + calculateNodeDepths(node.left, depth + 1) + calculateNodeDepths(node.right, depth + 1)
}

module.exports = calculateNodeDepths
