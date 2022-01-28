// 5.1.1 创建队列
export default class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    // 1.向队列添加元素
    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    // 2.从队列中移除元素
    dequeue() {
        if (this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    // 3.查看队列头元素
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }
    // 4.获取队列的长度并检查队列是否为空
    size() {
        return this.count - this.lowestCount
    }
    isEmpty() {
        return this.size() === 0
    }
    // 5.清空队列
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    // 6.创建toString方法
    toString() {
        if (this.isEmpty()) return ''
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}