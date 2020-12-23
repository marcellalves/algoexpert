// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

module.exports = (tree, target) => {
  return findClosestValueInBst(tree, target, tree.value)
}

function findClosestValueInBst(tree, target, closest) {
  let currentNode = tree
  while (currentNode !== null) {
    if (Math.abs(closest - target) > Math.abs(currentNode.value - target)) {
      closest = currentNode.value
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left 
    } else if (target > currentNode.value) {
      currentNode =  currentNode.right
    } else {
      break
    }
  }
  
  return closest
}
