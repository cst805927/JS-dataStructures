//3.7.3 ECMAEscript6和数组的新功能

//1.for...of...
for (const n of numbers) {
    console.log(n % 2 === 0 ? 'even' : 'odd')
}

//2.@@iterator对象
let iterator = numbers[Symbol.iterator]()
//数组中所有值迭代完之后，iterator.next().value会返回undefined
console.log(iterator.next().value) //1
console.log(iterator.next().value) //2
console.log(iterator.next().value) //3
console.log(iterator.next().value) //4
console.log(iterator.next().value) //5 
//输出numbers数组中的15个值
for (const n of iterator) {
    console.log(n)
}

//3.entries(), keys(), values()
//entries() 返回包含键值对的@@iterator
let aEntries = numbers.entries() //key是数组中的位置，value是保存在数组索引的值
console.log(aEntries.next().value) //[0, 1] 位置0的值为1
console.log(aEntries.next().value) //[1, 2] 位置1的值为2
console.log(aEntries.next().value) //[2, 3] 位置2的值为3
//打印所有键值对
aEntries = numbers.entries()
for (const n of aEntries) {
    console.log(n)
}
//keys() 返回numbers数组的索引
const aKeys = numbers.values()
console.log(aKeys.next()) //{value: 0, done: false}
console.log(aKeys.next()) //{value: 1, done: false}
console.log(aKeys.next()) //{value: 2, done: false}
//values() 返回的@@iterator包含数组的值
const aValues = numbers.values()
console.log(aValues.next()) //{value: 1, done: false}
console.log(aValues.next()) //{value: 2, done: false}
console.log(aValues.next()) //{value: 3, done: false}

//4. Array.from() 根据已有的数组创建一个新数组
//复制numbers数组
const numbers2 = Array.from(numbers)
//传入一个用来过滤的函数
let evens = Array.from(numbers2, x => (x % 2 === 0))

//5. Array.of() 根据传入的参数创建一个新数组
let numbers3 = Array.of() // let numbers3 = []
let numbers4 = Array.of(1, 2, 3, 4, 5) // let numbers4 = [1, 2, 3, 4, 5]
//复制已有的数组
let numbersCopy = Array.of(...numbers4) // Array.from(numbers4)

//6. fill() 用静态值填充数组
numbersCopy = Array.of(1, 2, 3, 4, 5, 6)
numbersCopy.fill(0) // [0, 0, 0, 0, 0, 0]
numbersCopy.fill(2, 1) // [0, 2, 2, 2, 2, 2]
numbersCopy.fill(1, 3, 5) // [0, 2, 2, 1, 1, 2] 包括3不包括5
let ones = Array(6).fill(1) // [1, 1, 1, 1, 1, 1]

//7. copyWithin() 复制数组中的元素到同一数组指定的起始位置
let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(0, 3) // [4, 5, 6, 4, 5, 6]
let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(1, 3, 5) // [1, 4, 5, 4, 5, 6]

