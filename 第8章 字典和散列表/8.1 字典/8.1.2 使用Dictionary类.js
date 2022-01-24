import Dictionary from "./8.1.1 创建字典类.js";

// 8.1.2 使用Dictionary类
const dictionary = new Dictionary
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')
console.log(dictionary.hasKey('Gandalf')) // true
console.log(dictionary.size()) // 3
console.log(dictionary.keys()) // ['Gandalf', 'John', 'Tyrion']
console.log(dictionary.values()) // ['gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com']
console.log(dictionary.get('Tyrion')) // tyrion@email.com
dictionary.remove('John')
console.log(dictionary.keys()) // ['Gandalf', 'Tyrion']
console.log(dictionary.values()) // ['gandalf@email.com', 'tyrion@email.com']
console.log(dictionary.keyValues()) // [ValuePair, ValuePair]
dictionary.forEach((key, value) => {
    console.log('forEach: ', `key: ${key}, value: ${value}`) 
    //forEach: key: Gandalf, value: gandalf@email.com
    //forEach: key: Tyrion, value: tyrion @email.com
})

