// 7.3.3 差集
import Set from "../7.2 创建集合类/7.2.0 创建集合类.js";
//test
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
const differenceAB = setA.difference(setB)
console.log(differenceAB.values()) // [1]