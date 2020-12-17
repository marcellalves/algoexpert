module.exports = (array, sequence) => {
  let elementHash = {}
  for (let i = 0; i < array.length; i += 1) {
    elementHash[array[i]] = i 
  }

  let currentIndex = -1 
  for (const element of sequence) {
    if (element in elementHash) {
      const index = elementHash[element]
      if (currentIndex <= index) {
        currentIndex = index
      } else {
        return false
      }
    }
  }

  if (currentIndex === -1) {
    return false 
  }

  return true 
}