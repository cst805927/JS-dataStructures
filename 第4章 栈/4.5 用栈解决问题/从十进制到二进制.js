// 从十进制到二进制
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