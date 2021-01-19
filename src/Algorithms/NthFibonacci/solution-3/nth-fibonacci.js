// O(n) time | O(1) space
function nthFibonacci(n) {
  let f0 = 0
  let f1 = 1
  let f2 = 0

  for (let i = 1; i < n; i++) {
    f2 = f0 + f1
    f0 = f1
    f1 = f2
  }

  return f0
}

module.exports = nthFibonacci
