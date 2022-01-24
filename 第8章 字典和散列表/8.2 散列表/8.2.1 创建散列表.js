import {
    defaultToString
} from "../../util/defaultToString.js";
import ValuePair from "../../util/ValuePair.js";

// 8.2.1 创建散列表
export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }
    // 1.创建散列函数
    loseloseHashCode(key) {
        if (typeof key === 'number') // 检验key是否是一个数
            return key // 如果是，直接返回
        const tableKey = this.toStrFn(key) // 防止key是对象，将key转为字符串
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i) // 每个字符对应的ASCII值累加
        }
        return hash % 37 // 为了得到较小的数，取余
    }
    hashCode(key) { // 找key应该放的位置
        return this.loseloseHashCode(key)
    }
    // 2.将键和值加入散列表
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }
    // 3.从散列表中获取一个值
    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    // 4.从散列表中移除一个值
    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair != null) {
            delete this.table[hash]
            return true
        }
        return false
    }

}