module.exports = (array) => {
  let aux = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] < array[j]) {
        aux = array[j]
        array[j] = array[i]
        array[i] = aux
      }
    }
  }

  return array;
}
