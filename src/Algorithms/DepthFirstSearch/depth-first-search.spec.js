const Node = require('./depth-first-search')

describe('Depth First Search', () => {
  test('Sample Input should return Sample Output', () => {
    const nodeA = new Node('A')
    const nodeB = new Node('B')
    nodeA.addChild(nodeB)
    nodeA.addChild(new Node('C'))
    const nodeD = new Node('D')
    nodeB.addChild(new Node('E'))
    const nodeF = new Node('F')
    nodeB.addChild(nodeF)
    const nodeG = new Node('G')
    nodeD.addChild(nodeG)
    nodeD.addChild(new Node('H'))
    nodeF.addChild(new Node('I'))
    nodeF.addChild(new Node('J'))
    nodeG.addChild(new Node('K'))

    nodeA.currentNode = nodeA
    nodeA.stack = []

    const result = nodeA.depthFirstSearch([])

    expect(result).toEqual(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K'])
  })
})