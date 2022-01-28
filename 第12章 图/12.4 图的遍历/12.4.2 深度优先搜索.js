import {
    Colors,
    initializeColor
} from "./Colors.js"

// 12.4.2 深度优先搜索
export const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE)
            depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
}
const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY
    if (callback) callback(u)
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.WHITE)
            depthFirstSearchVisit(w, color, adjList, callback)
    }
    color[u] = Colors.BLACK
}
// 1.探索深度优先算法
export const DFS = graph => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const d = {}
    const f = {}
    const p = {}
    const time = { count: 0 }
    for (let i = 0; i < vertices.length; i++) {
        f[vertices[i]] = 0
        d[vertices[i]] = 0
        p[vertices[i]] = null
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) 
            DFSVisit(vertices[i], color, d, f, p, time, adjList)
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    }
}
const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY
    d[u] = ++time.count // 记录发现时间
    const neighbors = adjList.get(u)
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i]
        if (color[w] === Colors.WHITE) {
            p[w] = u // 记录前溯节点
            DFSVisit(w, color, d, f, p, time, adjList)
        }
    }
    color[u] = Colors.BLACK
    f[u] = ++time.count // 记录完全探索时间
}

