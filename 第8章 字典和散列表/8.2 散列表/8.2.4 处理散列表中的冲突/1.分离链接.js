// 1.分离链接
import {
    defaultToString
} from "../../../util/defaultToString.js";
import ValuePair from "../../../util/ValuePair.js";
import LinkedList from "../../../第6章 链表/6.1 链表数据结构/6.1 链表数据结构.js";
import HashTable from "../8.2.1 创建散列表.js";
export default class HashTableSeparateCaining extends HashTable {
    constructor(toStrFn = defaultToString) {
        super(toStrFn)
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            if (this.table[position] == null)
                this.table[position] = new LinkedList()
            this.table[position].push(new ValuePair(key, value))
            return true
        }
        return false
    }
    get(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while (current != null) {
                if (current.element.key === key)
                    return current.element.value
                current = current.next
            }
        }
        return undefined
    }
    remove(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element)
                    if (linkedList.isEmpty())
                        delete this.table[position]
                    return true
                }
                current = current.next
            }
        }
        return false
    }
}
