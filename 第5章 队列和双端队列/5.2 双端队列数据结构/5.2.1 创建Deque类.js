// 5.2.1 创建Deque类
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    // 向双端队列的前端添加元素
    addFront(element) {
        if (this.isEmpty()) { // 双端队列是空的
            this.addBack(element) // 添加到后端
        } else if (this.lowestCount > 0) { // 有一个元素已经从双端队列前端移除
            this.lowestCount--
            this.items[this.lowestCount] = element // 把新元素放在该键上
        } else { // lowestCount === 0
            for (let i = this.count; i > 0; i--) { // 把所有元素后移一位，来空出第一个位置
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    toString() {
        if (this.items.isEmpty()) return ''
        let objString = this.items[this.lowestCount]
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
    removeFront() {
        if (this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    removeBack() {
        if (this.isEmpty()) return undefined
        const result = this.items[this.count]
        delete this.items[this.count]
        this.count--
        return result
    }

}