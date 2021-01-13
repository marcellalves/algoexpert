const nodeDepths = require("../solution-1/node-depths");

module.exports = (root) => {
  let depthSum = 0
  const stack = [{node: root, depth: 0}]

  while (stack.length > 0) { 
    const { node, depth } = stack.pop()

    depthSum =  depthSum + depth

    if (node.left !== null) {
      stack.push({ node: node.left, depth: depth + 1 })
    }

    if (node.right !== null) {
      stack.push({ node: node.right, depth: depth + 1 })
    }
  } 

  return depthSum
}