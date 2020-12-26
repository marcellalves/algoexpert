// O(n) time | O(n) space
module.exports = (tree) => {
  let sums = []
  calculateBranchSums(tree, 0, sums)
  return sums
}

function calculateBranchSums(node, sum, sums) {
  if (node === null) {
    return
  }

  const newSum = sum + node.value

  if (node.left === null && node.right === null) {
    sums.push(newSum)
    return
  }

  calculateBranchSums(node.left, newSum, sums)
  calculateBranchSums(node.right, newSum, sums)
}
