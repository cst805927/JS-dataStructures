import MinHeap from "./11.1 二叉堆数据结构/11.1.1 创建最小堆.js";
import MaxHeap from "./11.1 二叉堆数据结构/11.1.2 创建最大堆类.js";
import {
    heapSort
} from "./11.2 堆排序算法/11.2 堆排序算法.js";
console.log('--------------最小堆------------------')
const heap = new MinHeap()
heap.insert(2)
heap.insert(3)
heap.insert(4)
heap.insert(5)
heap.insert(1)
console.log('Heap size: ', heap.size())
console.log('Heap is empty: ', heap.isEmpty())
console.log('Heap min value: ', heap.findMinimum())
for (let i = 1; i < 10; i++) {
    heap.insert(1)
}
console.log('Extract minimum: ', heap.extract())
console.log('-----------------最大堆-------------')
const maxHeap = new MaxHeap()
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)
maxHeap.insert(1)
console.log('Heap size: ', maxHeap.size())
console.log('Heap is empty: ', maxHeap.isEmpty())
console.log('Heap min value: ', maxHeap.findMinimum())
console.log('------------堆排序算法--------------')
const array = [7, 6, 3, 5, 4, 1, 2]
console.log('Before sorting: ', array)
console.log('After sorting: ', heapSort(array))