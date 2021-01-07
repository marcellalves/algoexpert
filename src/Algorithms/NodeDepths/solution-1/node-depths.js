module.exports = (tree) => {
  const depths = []
  calculateSumNodeDepths(tree, 0, depths)
  return depths.reduce((a, b) => { return a + b })
}

function calculateSumNodeDepths(node, depth, depths) {
  if (node === null) {
    return 
  }

  depths.push(depth)

  calculateSumNodeDepths(node.right, depth + 1, depths)
  calculateSumNodeDepths(node.left, depth + 1, depths)
}
