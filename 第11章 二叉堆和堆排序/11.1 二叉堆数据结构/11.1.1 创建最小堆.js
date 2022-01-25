// 11.1.1 创建最小堆
import {
    Compare,
    defaultCompare
} from "../../util/defaultCompare.js";
import {
    swap
} from "../../util/swap.js";
export default class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }
    // 1.二叉树的数组表示
    getLeftIndex(index) {
        return 2 * index + 1
    }
    getRightIndex(index) {
        return 2 * index + 2
    }
    getParentIndex(index) {
        if (index === 0) return undefined
        return Math.floor((index - 1) / 2)
    }
    // 2.向堆中插入值
    insert(value) {
        if (value != null) {
            this.heap.push(value)
            this.siftUp(this.heap.length - 1)
            return true
        }
        return false
    }
    // 上移操作
    siftUp(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
            swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
    // 3.从堆中找到最小值或最大值
    size() {
        return this.heap.length
    }
    isEmpty() {
        return this.size() === 0
    }
    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]
    }
    // 4.导出堆中的最小值或最大值
    extract() {
        if (this.isEmpty()) return undefined
        if (this.size() === 1) return this.heap.shift()
        const removedValue = this.heap.shift()
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
        return removedValue
    }
    // 下移操作
    shiftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN)
            element = left
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN)
            element = right
        if (index !== element) {
            swap(this.heap, index, element)
            this.shiftDown(element)
        }
    }
}