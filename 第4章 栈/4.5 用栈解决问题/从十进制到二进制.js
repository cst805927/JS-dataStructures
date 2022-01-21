// 从十进制到二进制
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

function decimalToBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem
    let binaryString = ''
    while (number > 0) {
        rem = Math.floor(number % 2) //获得一个余数
        remStack.push(rem) //把余数放到栈里
        number = Math.floor(number / 2)
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}
// 测试
console.log(decimalToBinary(233)) // 11101001
console.log(decimalToBinary(10)) // 1010
console.log(decimalToBinary(1000)) // 1111101000