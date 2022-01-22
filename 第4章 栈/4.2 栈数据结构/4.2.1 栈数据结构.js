//4.2.1 创建一个基于数组的栈
class Stack {
    constructor() {
        this.items = []
    }
    //4.2.2 向栈添加一个元素
    push(element) {
        this.items.push(element)
    }
    //4.2.3 从栈顶移除元素
    pop() {
        return this.items.pop()
    }
    //4.2.4 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    //4.2.5 检查栈是否为空
    isEmpty() {
        return this.items.length === 0
    }
    //返回栈的长度
    size() {
        return this.items.length
    }
    //4.2.6 清空栈元素
    clear() {
        this.items = []
    }
}