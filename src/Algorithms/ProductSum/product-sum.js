// O(n) time | O(d) space - where d is the maximum depth of inner arrays
function productSum(array, depth = 1) {
  let sum = 0

  for (const value of array) {
    if (Array.isArray(value)) {
      sum += productSum(value, depth + 1)
    } else {
      sum += value
    }
  }

  return sum * depth
}

module.exports = productSum
