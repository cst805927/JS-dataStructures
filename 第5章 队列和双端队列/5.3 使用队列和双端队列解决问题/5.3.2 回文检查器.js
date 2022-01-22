// 5.3.2 回文检查器
function palindromeChecker(aString) {
    if (aString === undefined ||
        aString === null ||
        (aString !== null && aString.length === 0)) // 检查传入的字符串参数是否合法
        return false
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('') // 转化为小写，并移除所有空格
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++) { // 所有字符执行enqueue操作
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront() // 从前端移除一个元素
        lastChar = deque.removeBack() // 从后端移除一个元素
        if (firstChar !== lastChar) { // 如果两个字符不同
            isEqual = false // 不是一个回文字符串
        }
    }
    return isEqual
}
// 测试palindromeChecker算法
console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
