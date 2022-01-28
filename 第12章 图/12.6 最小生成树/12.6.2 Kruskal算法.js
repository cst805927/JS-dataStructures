// 12.6.2 Kruskal算法
const kruskal = graph => {
    const {
        length
    } = graph
    const parent = []
    let ne = 0
    let a, b, u, v;
    const cost = initializeCost(graph)
    while (ne < length - 1) {
        for (let i = 0, min = INF; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) { // 找权值最小的边
                    min = cost[i][j]
                    a = u = i
                    b = v = j
                }
            }
        } 
        u = find(u, parent) // 检查parent中是否存在这条边，避免环路
        v = find(v, parent)
        if (union(u, v, parent)) ne++ 
        cost[a][b] = cost[b][a] = INF // 移除这条边，以免重复计算
    }
    return parent
}
const find = (i, parent) => {
    while (parent[i]) {
        i = parent[i]
    }
    return i
}
const union = (i, j, parent) => {
    if (i !== j) {
        parent[j] = i
        return true
    }
    return false
}