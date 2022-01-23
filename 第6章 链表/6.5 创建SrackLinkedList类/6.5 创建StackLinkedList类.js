// 6.5 创建StackLinkedList类
import DoublyLinkedList from '../6.2 双向链表/6.2 双向链表.js'
export default class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList()
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) return undefined
        return this.items.removeAt(this.size())
    }
    isEmpty() {
        return this.items.isEmpty()
    }
    size() {
        return this.items.size()
    }
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.size() - 1].element
    }
    clear() {
        this.items.clear()
    }
    toString() {
        return this.items.toString()
    }
}