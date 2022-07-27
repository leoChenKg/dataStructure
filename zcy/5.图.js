/**
 * [
 *   [form , to, weight ]
 * ]
 */
let graph = [
  [1, 3, 1],
  [2, 1, 2],
  [3, 2, 3],
  [4, 1, 4]
]

class Node {
  constructor(id, data) {
    this.id = id
    this.data = data
    this.edges = []
  }
}

class Edge {
  constructor(from, to, weight) {
    this.in = 0
    this.out = 0
    this.from = from
    this.to = to
    this.weight = weight
  }
}
class Graph {
  constructor(nodeList) {
    this.nodeList = nodeList
    this.helpList = {}
    this.edges = []
    this.nodes = []
  }

  init() {
    this.nodeList.forEach(item => {
      let [from, to, weight] = item
      if (!this.helpList[from]) {
        this.helpList[from] = new Node(from)
      }
      if (!this.helpList[to]) {
        this.helpList[to] = new Node(to)
      }
      const fromNode = this.helpList[from]
      const toNode = this.helpList[to]
      const edge = new Edge(fromNode, toNode, weight)
      fromNode.edges.push(edge)
      fromNode.out++
      toNode.in++
    })
  }
}
