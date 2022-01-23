import { defaultEquals } from "../../util/defaultEquals.js";
import LinkedList from "../6.1 链表数据结构/6.1 链表数据结构.js";
import Node from "../models/linked-list-models.js";
// 6.3 循环链表
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }
    // 6.3.1 在任意位置插入新元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                if (this.head === undefined) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = this.head
                    current = this.getElementAt(this.size())
                    this.head = node
                    current.next = this.head
                }
            } else {
                const previous = this.getElementAt(index)
                previous.next = node
                node.next = previous.next
            }
            this.count++
            return true
        }
        return false
    }
    // 6.3.2 从任意位置移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined
                } else {
                    const previous = this.getElementAt(this.size())
                    this.head = this.head.next
                    previous.next = this.head
                }
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current
        }
    }
}

