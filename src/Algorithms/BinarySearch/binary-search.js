function binarySearchArray (array, target) {
  let begin = 0
  let end = array.length - 1
  let pivot = 1

  while (begin <= end) {
    if (begin < end) {
      pivot = Math.floor((end + begin) / 2)
    } else {
      pivot = begin
    }

    if (array[pivot] === target) {
      return pivot
    }

    if (array[pivot] > target) {
      end = pivot - 1
    }

    if (array[pivot] < target) {
      begin = pivot + 1
    }
  }

  return -1
}

module.exports = binarySearchArray
