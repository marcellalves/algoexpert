module.exports = (tree) => {
  let sumArray = []
  if (tree.left !== null) {
    sumLeft(tree.left, tree.value, sumArray)
  }
  if (tree.right !== null) {
    sumRight(tree.right, tree.value, sumArray)
  }

  return sumArray
}

function sumLeft (node, sum, sumArray) {
  if (node !== null) {
    sum = sum + node.value

    if (node.left !== null) {
      return sumLeft(node.left, sum, sumArray)
    } else {
      sumArray.push(sum)
      return sumRight(node.right)
    }
  }
}

function sumRight (node, sum, sumArray) {
  if (node !== null) {
    sum = sum + node.value

    if (node.right !== null) {
      return sumRight(node.right, sum, sumArray)
    } else {
      sumArray.push(sum)
      return
    }
  }
}
