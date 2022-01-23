// 6.4 有序链表
import { defaultEquals } from '../../util/defaultEquals.js'
import LinkedList from '../6.1 链表数据结构/6.1 链表数据结构.js'
const Compare = {
    LESS_THEN: -1, 
    BIGGER_THEN: 1
}
function defaulrCompare(a, b) {
    if (a === b) {
        return 0
    }
    return a < b ? Compare.LESS_THEN : Compare.BIGGER_THEN
}
export default class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.compareFn = defaulrCompare
    }
    // 有序插入元素
    insert(element) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const pos = this.getIndexNextSortedElement(element)
        return super.insert(element, pos)
    }
    getIndexNextSortedElement(element) {
        let current = this.head
        let i = 0
        for(; i < this.count; i++) {
            const comp = this.compareFn(element, current.element)
            if (comp === Compare.LESS_THEN) return i
            current = current.next
        }
        return i
    }
}