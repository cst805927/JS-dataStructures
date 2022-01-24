// 2.分离链接
import {
    defaultToString
} from "../../../util/defaultToString.js";
import ValuePair from "../../../util/ValuePair.js";
import LinkedList from "../../../第6章 链表/6.1 链表数据结构/6.1 链表数据结构.js";
import HashTable from "../8.2.1 创建散列表.js";
export default class HashTableLinearProbing extends HashTable {
    constructor(toStrFn = defaultToString) {
        super(toStrFn)
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            if (this.table[position] == null) {
                this.table[position] = new ValuePair(key, value)

            } else {
                let index = position + 1
                while (this.table[index] != null) {
                    index++
                }
                this.table[index] = new ValuePair(key, value)
            }
            return true
        }
        return false
    }
    get(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key) 
                return this.table[position].value
            let index = position + 1
            while (this.table[index] != null && this.table[index].key !== key) {
                index++
            }
            if (this.table[index] != null && this.table[index].key === key)
                return this.table[position].value
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key)
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position]
                this.verifyRemoveSideEffect(key, position)
                return true
            }
            let index = position + 1
            while (this.table[index] != null && this.table[index].key !== key) {
                index++
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index]
                this.verifyRemoveSideEffect(key, index)
                return true
            }
        }
        return false
    }
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key)
        let index = removedPosition + 1
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key)
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index]
                delete this.table[index]
                removedPosition = index
            }
            index++
        }
    }
}
