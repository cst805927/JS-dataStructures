// 4.4.2 用ES6的Symbol实现类
const _items = Symbol('stackItems')
const _count = Symbol('stackCount')
class Stack {
    constructor() {
        this[_items] = []
        this[_count] = 0
    }
    push(element) {
        this[_items][this[_count]] = element
        this[_count]++
    }
    print() {
        console.log(this[_items].toString())
    }
}
//破坏Stack类的例子
const stack = new Stack()
stack.push(5)
stack.push(8)
const objectSymbols = Object.getOwnPropertySymbols(stack)
console.log(objectSymbols.length) // 1
console.log(objectSymbols) // Symbol() 
// stack[objectSymbols[0]]可以得到_items，items是数组，可以进行任意数组操作，比如从中间添加元素，但我们
stack[objectSymbols[0]][0] = 1
stack.print() // 1, 8
