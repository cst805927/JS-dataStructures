import Graph from "./12.3 创建Graph类/12.3 创建Graph类.js";
import {
    BFS,
    breadthFirstSearch
} from "./12.4 图的遍历/12.4.1 广度优先搜索.js";
import Stack from "../第4章 栈/4.2 栈数据结构/4.2.1 栈数据结构.js";
import {
    depthFirstSearch,
    DFS
} from "./12.4 图的遍历/12.4.2 深度优先搜索.js";
let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
console.log('---------创建Graph类--------------')
console.log(graph.toString())
console.log('----------------广度优先搜索-----------')
const printVertex = (value) => console.log('Visited vertex: ' + value)
breadthFirstSearch(graph, myVertices[0], printVertex)
console.log('----------BFS----------')
const shortedtPathA = BFS(graph, myVertices[0])
console.log(shortedtPathA)
const fromVertex = myVertices[0]
for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i]
    const path = new Stack()
    for (let v = toVertex; v !== fromVertex; v = shortedtPathA.predecessors[v]) {
        path.push(v)
    }
    path.push(fromVertex)
    let s = path.pop()
    while (!path.isEmpty()) {
        s += ' - ' + path.pop()
    }
    console.log(s)
}
console.log('-------------------深度优先搜索-------------------')
depthFirstSearch(graph, printVertex)
console.log('-----------------拓扑排序---------------')
graph = new Graph(true)
myVertices = ['A', 'B', 'C', 'D', 'E', 'F']
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'F')
graph.addEdge('F', 'E')
const result = DFS(graph)
const fTimes = result.finished
let s = ''
for (let count = 0; count < myVertices.length; count++) {
    let max = 0
    let maxName = null
    for (let i = 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
            max = fTimes[myVertices[i]]
            maxName = myVertices[i]
        }
    }
    s += ' - ' + maxName
    delete fTimes[maxName]
}
console.log(s)