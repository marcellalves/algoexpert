module.exports = (tree, target) => {
  const result = findClosestValue(tree, target, tree.value)
  return result
}

function findClosestValue(currentNode, target, closest) {
    if (currentNode === null) return closest
    
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value
    }

    if (target < currentNode.value) {
      return findClosestValue(currentNode.left, target, closest)
    } else if (target > currentNode.value) {
      return findClosestValue(currentNode.right, target, closest)
    } else {
      return closest
    }
}
