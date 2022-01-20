//3.7.5搜索
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//indexOf()
console.log(numbers.indexOf(10)) //9
console.log(numbers.indexOf(100)) //-1
//lastIndexOf()
numbers.push(10)
console.log(numbers.lastIndexOf(10)) //15
console.log(numbers.lastIndexOf(100)) //-1
//1.ES5: find(), findIndex()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function multipleOf13(element, index, array) {
    return (element % 13 === 0)
}
console.log(numbers.find(multipleOf13)) //13
console.log(numbers.findIndex(multipleOf13)) //12
//2.ES7: include()
console.log(numbers.includes(15)) //true
console.log(numbers.includes(20)) //false
//传入起始索引
let numbers2 = [7, 6, 5, 4, 3, 2, 1]
console.log(numbers2.includes(4, 5)) //false
