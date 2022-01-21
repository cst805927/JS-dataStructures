//3.7.4排序元素
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//reverse() 反序输出数组
numbers.reverse() //[]
//sort()
numbers.sort() //[1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.sort((a, b) => (a - b))

//1.自定义排序
// const friends = [{
//         name: Join,
//         age: 30
//     },
//     {
//         name: Ana,
//         age: 20
//     },
//     {
//         name: Chris,
//         age: 25
//     }, //ES2017允许存在尾逗号
// ]

// function comparePerson(a, b) {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
// }
console.log(friends.sort(comparePerson)) // Ana(20), Chris(25), John(30)

//2.字符串排序
let names = ['Ana', 'ana', 'john', 'John']
console.log(name.sort()) //['Ana', 'John', 'ana', 'john']
//忽略大小写的比较函数
names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1
    if (a.toLowerCase() > b.toLowerCase()) return 1
    return 0
}))
//小写字母排在前面
names.sort((a, b) => a.localeCompare(b)) // ['ana', 'Ana', 'john', 'John']