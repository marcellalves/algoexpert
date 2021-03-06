// O(n^2) time | O(1) space
module.exports = (array, targetSum) => {
  for (const number of array) {
    for (const addNumber of array) {
      if (number !== addNumber) {
        const sum = number + addNumber

        if (sum === targetSum) {
          return [number, addNumber]
        }
      }
    }
  }

  return []
}