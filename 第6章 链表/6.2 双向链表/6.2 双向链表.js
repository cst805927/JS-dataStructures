// 6.2 双向链表
import defaultEquals from "../../util/defaultEquals"
import LinkedList from "../6.1 链表数据结构/6.1 链表数据结构"
import Node from "../models/linked-list-models"
class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}
export default class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = undefined
    }
    // 在任意位置插入新元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head
            if (index === 0) { // 在第一个位置添加
                if (this.head == null) { // 双向链表为空
                    this.head = node
                    this.tail = node
                } else { // 双向链表不为空
                    node.next = this.head
                    current.prev = this.tail
                    this.tail = node
                }
            } else if (index === this.count) { // 最后一项
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else { // 中间项
                const previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
    // 6.2.2 从任意位置移除元素
    removeAt(index) {
        if (index >= 0 && index > this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
                if (this.count === 1) { // 如果只有一项，更新tail
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) { // 最后一项
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
        }
        return undefined
    }
}