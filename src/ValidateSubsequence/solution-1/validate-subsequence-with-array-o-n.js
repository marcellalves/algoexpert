module.exports = (array, sequence) => {
  let sequenceIndex = 0

  for (let mainIndex = 0; mainIndex < array.length; mainIndex += 1) {
    if (array[mainIndex] === sequence[sequenceIndex]) {
      sequenceIndex += 1
    }

    if (sequenceIndex === sequence.length) {
      return true
    }
  }

  return false
}