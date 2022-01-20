//3.7.2 迭代器函数
const isEven = x => x % 2 === 0
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

//1.every
//方法会迭代数组中每个元素，直到返回false
numbers.every(isEven) //false, 结束

//2.some
//和every相反，会迭代数组的每个元素，直到函数返回true
numbers.some(isEven) //false, true, 结束

//3.forEach 
numbers.forEach(x => console.log(x % 2 === 0))

//4.map和filter
const myMap = numbers.map(isEven) //[false, true, false, true, false, true, false, true, false, true, false, true, false, true]
const evenNumbers = numbers.filter(isEven) //[2, 4, 6, 8, 10, 12, 14]

//5.reduce
//函数会返回一个被叠加的累加器的值，reduce方法停止执行后会返回这个累加器
numbers.reduce((previous, current) => previous + current) //120

