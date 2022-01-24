import HashTable from "./8.2.1 创建散列表.js";

// 8.2.2 使用HashTable类
const hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'Johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.hashCode('Gandalf') + ' - Gandalf ') // 19 - Gandalf 
console.log(hash.hashCode('John') + ' - John ') // 29 - John
console.log(hash.hashCode('Tyrion') + ' - Tyrion ') // 16 - Tyrion
console.log(hash.get('Gandalf')) // gandalf@email.com
console.log(hash.get('Loiane')) // undefined
hash.remove('Gandalf')
console.log(hash.get('Gandalf')) // undefined