// 进制转换算法
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
function baseConverter(decNumber, base) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem
    let baseString = ''
    if (!(base >= 2 && base <= 36)) return ''
    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]
    }
    return baseString
}
console.log(baseConverter(100345, 2)) // 11000011111111001
console.log(baseConverter(100345, 8)) // 303771
console.log(baseConverter(100345, 16)) // 187F9
console.log(baseConverter(100345, 35)) // 2BW0

