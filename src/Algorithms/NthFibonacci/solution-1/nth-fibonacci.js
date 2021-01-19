// O(2^n) time | O(n) space
function nthFibonacci (n) {
  if (n === 2) {
    return 1
  } else if (n === 1) {
    return 0
  }

  return nthFibonacci(n - 1) + nthFibonacci(n - 2)
}

module.exports = nthFibonacci
