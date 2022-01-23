// 7.3.1 并集
import Set from "../7.2 创建集合类/7.2.0 创建集合类.js";
//test
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
const unionAB = setA.union(setB)
console.log(unionAB.values()) // [1, 2, 3, 4, 5, 6]