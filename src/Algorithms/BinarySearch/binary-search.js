function binarySearchArray (array, target) {
  if (array.length === 0) {
    return -1
  }

  const pivot = ~~(array.length / 2)
  const value = array[pivot]

  if (target === value) {
    return pivot
  }

  if (target < value) {
    return binarySearchArray(array.slice(0, pivot), target)
  }

  if (target > value) {
    return binarySearchArray(array.slice(pivot + 1))
  }
}

module.exports = binarySearchArray
