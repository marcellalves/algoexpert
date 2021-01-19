// O(n) time | O(n) space
function nthFibonacci(n, cache = { 1: 0, 2: 1 }) {
  if (n in cache) {
    return cache[n]
  } else {
    cache[n] = nthFibonacci(n - 1, cache) + nthFibonacci(n - 2, cache)

    return cache[n]
  }
}

module.exports = nthFibonacci
