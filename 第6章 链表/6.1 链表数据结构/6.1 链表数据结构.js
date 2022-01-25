// 6.1 链表数据结构
import {
    defaultEquals
} from "../../util/defaultEquals.js"
import Node from "../../models/linked-list-models.js"
//创建链表
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    // 1.向链表尾部添加元素
    push(element) {
        const node = new Node(element)
        let current
        if (this.head === undefined) { // 向空链表添加一个元素
            this.head = node
        } else {
            current = this.head
            while (current.next !== null) { // 循环访问链表
                current = current.next
            }
            // 当 current.next 元素为 undefined 或 nul l时，current 指向最后一个节点
            current.next = node // 让最后一个节点的 next 指向想要添加的节点 node
        }
        this.count++
    }
    // 2.从链表中移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) { // 检查 index 是否有效
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                const previous = this.getElementAt(index - 1) // 索引为 index - 1 的元素
                current = previous.next // 索引为 index 的元素
                previous.next = current.next // 连接索引为 index - 1 和 index + 1 的元素
            }
            this.count--
            return current.element
        }
        return undefined // 如果index不合法，返回undefined
    }
    // 3.循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // 验证index的合法性
            let node = this.head // 从第一个元素开始
            for (let i = 0; i < index && node !== null; i++) {
                node = node.next // 索引为 index 的元素
            }
            return node
        }
        return undefined // 如果 index 不合法，返回 undefined
    }
    // 4.在任意位置插入元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) { // 检查index是否合法
            const node = new Node(element)
            if (index === 0) { // 在第一个位置添加
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false // 如果index不合法，返回false
    }
    // 5.indexOf方法：返回一个元素的位置
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current !== null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    // 6.从链表中移除元素
    remove(element) {
        const index = this.getElementAt(element)
        return this.removeAt(index)
    }
    // 7.isEmpty, size 和 getHead 
    size() {
        return this.count
    }
    isEmpty() {
        return this.size() === 0
    }
    getHead() {
        return this.head
    }
    // 8.toString()
    toString() {
        if (this.head === undefined) return ''
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current !== null; i++) {
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }
}