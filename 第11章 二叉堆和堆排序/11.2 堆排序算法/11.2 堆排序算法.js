import {
    Compare,
    defaultCompare
} from "../../util/defaultCompare.js";
import {
    swap
} from "../../util/swap.js";

// 11.2 堆排序算法
export function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length
    buildMaxHeap(array, compareFn)
    while (heapSize > 1) {
        swap(array, 0, --heapSize)
        heapify(array, 0, heapSize, compareFn)
    }
    return array
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, i, array.length, compareFn)
    }
    return array
}

function heapify(array, index, size, compareFn) {
    let element = index
    const left = getLeftIndex(index)
    const right = getRightIndex(index)
    if (left < size && compareFn(array[element], array[left]) === Compare.BIGGER_THAN)
        element = left
    if (right < size && compareFn(array[element], array[right]) === Compare.BIGGER_THAN)
        element = right
    if (index !== element) {
        swap(array, index, element)
        heapify(array, element, size, compareFn)
    }
}

function getLeftIndex(index) {
    return index * 2 + 1
}

function getRightIndex(index) {
    return index * 2 + 2
}