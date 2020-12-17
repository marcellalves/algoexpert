module.exports = (array, sequence) => {
  let sequenceIndex = 0

  for (let element of array) {
    if (element === sequence[sequenceIndex]) {
      sequenceIndex += 1
    }

    if (sequenceIndex === sequence.length) {
      return true
    }
  }

  return false
}