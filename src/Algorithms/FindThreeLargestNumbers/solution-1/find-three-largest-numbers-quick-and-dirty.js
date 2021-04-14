const { getDataExtractorApi } = require('@hediet/debug-visualizer-data-extraction')

getDataExtractorApi().registerDefaultExtractors();

/*
Visualize this expression:

hedietDbgVis.markedGrid(
    array,
    hedietDbgVis.tryEval(["i", "j", "left", "right"])
)

*/

// O(n) time | O(1) space
module.exports = (input) => {
  let biggestValuesIndexes = []
  let biggestValues = []

  for (let j = 0; j <= 2; j++) {
    let biggestValue = -999
    let biggestIndex = -1
    
    for (let i = 0; i < input.length; i ++) {
      if (!biggestValuesIndexes.includes(i)) {
        if (input[i] > biggestValue) {
          biggestValue = input[i]
          biggestIndex = i
        }
      }
    }

    biggestValuesIndexes.push(biggestIndex)
    biggestValues.unshift(biggestValue)
  }

  return biggestValues
}
