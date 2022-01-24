// 8.1.1 创建字典类
import {
    defaultToString
} from '../../util/defaultToString.js'
import ValuePair from '../../util/ValuePair.js'

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    // 1.检测一个键是否存在于字典中
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null // 不是null或者undefined
    }
    // 2.在字典和ValuePair类中设置键和值
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }
    // 3.从字典中移除一个值
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        }
        return false
    }
    // 4.从字典中检索一个值
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    // 5.keys, values 和 valuePairs
    keyValues() {
        return Object.values(this.table) // ES7引入Object.values()
    }
    // 向下兼容
    // keyValues() {
    //     const valuePairs = []
    //     for (const key in this.table) {
    //         if (this.hasKey(key)) // 对象原型可能包含其它属性
    //             valuePairs.push(this.table[key])
    //     }
    //     return valuePairs
    // }
    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }
    values() {
        return this.keyValues().map(valuePair =>valuePair.value)
    }
    // 6.用forEach迭代字典中的每个键值对
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (result === false) break
        }
    }
    // 7.clear, size, isEmpty 和 toString
    size() {
        return Object.keys(this.table).length
    }
    isEmpty() {
        return this.size() === 0
    }
    clear() {
        this.table = {}
    }
    toString() {
        if (this.isEmpty()) return ''
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }


}