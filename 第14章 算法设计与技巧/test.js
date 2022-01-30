import { minCoinChange } from "./14.2 动态规划/14.2.1 最少硬币找零问题.js";
import { knapSack } from "./14.2 动态规划/14.2.2 背包问题.js";
import { matrixChainOrder } from "./14.2 动态规划/14.2.4 矩阵链相乘.js";
import { ratInAMaze } from "./14.4 回溯算法/14.4.1 迷宫老鼠问题.js";

// test
console.log(minCoinChange([1, 5, 10, 25], 36))
console.log('-------------------------')
console.log(minCoinChange([1, 3, 4], 6))
console.log('--------------------背包问题-----------------')
const values = [3, 4, 5],
weights = [2, 3, 4],
capacity = 5,
n = values.length
console.log(knapSack(capacity, weights, values, n))
console.log('----------------矩阵链相乘-----------')
const p = [10, 100, 5, 50, 1]
console.log(matrixChainOrder(p))
console.log('----------------------迷宫老鼠问题-----------------')
const maze = [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
]
console.log(ratInAMaze(maze))