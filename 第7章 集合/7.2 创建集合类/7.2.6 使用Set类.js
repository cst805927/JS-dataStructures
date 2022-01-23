// 7.2.6 使用Set类
import Set from '../7.2 创建集合类/7.2.0 创建集合类.js'
const set = new Set()
set.add(1)
console.log(set.values()) //[1]
console.log(set.has(1)) // true
console.log(set.size()) // 1
set.add(2)
console.log(set.values()) // [1, 2]
console.log(set.has(2)) // true
console.log(set.size()) // 2
set.delete(1)
console.log(set.values()) // [2]
set.delete(2)
console.log(set.values()) // []

