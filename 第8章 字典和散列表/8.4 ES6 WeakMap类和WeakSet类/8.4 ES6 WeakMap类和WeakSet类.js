// 8.4 ES6 WeakMap类和WeakSet类
// 有没有Weak的区别：
// 1.Weak类没有entries, keys 和 values 等方法
// 2.只能用对象作为键
const map = new WeakMap()

const ob1 = { name: 'Gandalf' }
const ob2 = { name: 'John' }
const ob3 = { name: 'Tyrion' }

map.set(ob1, 'gandalf@email.com')
map.set(ob1, 'johnsnow@email.com')
map.set(ob1, 'tyrion@email.com')

console.log(map.has(ob1)) // true
console.log(map.get(ob3)) // undefined
map.delete(ob2)