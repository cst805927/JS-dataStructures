class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    // 4.3.1 向栈中插入元素
    push(element) {
        this.items[this.count] = element
        this.count++
    }

    // 4.3.2 验证一个栈是否为空
    isEmpty() {
        return this.count === 0
    }
    // 栈的大小
    size() {
        return this.count
    }

    // 4.3.3 从栈中弹出元素
    pop() {
        // 检验栈是否为空
        if (this.isEmpty()) return undefined // 如果为空，返回undefined
        //如果栈不为空
        this.count-- // count属性减1
        const result = this.items[this.count] // 保存栈顶的值
        delete this.items[this.count] // 删除栈顶元素
        return result //返回栈顶元素
    }

    // 4.3.4 查看栈顶的值
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.count]
    }
    // 清空栈
    clear() {
        this.items = []
        this.count = 0
        // 也可以:
        // while(!this.isEmpty()) this.items.pop()
    }

    // 4.3.5 toString()
    toString() {
        if(this.isEmpty()) return '' // 如果栈为空，返回一个空字符串
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++) 
            objString = `${objString}, ${this.items[i]}`
        return objString
    }
}