function nthFibonacci (n) {
  if (n === 2) {
    return 1
  } else if (n === 1) {
    return 0
  } else {
    return nthFibonacci(n - 1) + nthFibonacci(n - 2)
  }
}

module.exports = nthFibonacci