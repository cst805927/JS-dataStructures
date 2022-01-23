// 7.3.4 子集
import Set from "../7.2 创建集合类/7.2.0 创建集合类.js";
//test
const setA = new Set()
setA.add(1)
setA.add(2)
const setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
const setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)
console.log(setA.isSubsetOf(setB)) // true
console.log(setA.isSubsetOf(setC)) // false