import { Compare, defaultCompare } from "../../util/defaultCompare.js";
import { quickSort } from "../../第13章 排序和搜索算法/13.1 排序算法/13.1.5 快速排序.js";

// 二分搜索
export function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const element = array[mid]
        if (compareFn(element, mid) === Compare.LESS_THAN)
            return binarySearchRecursive(array, value, mid + 1, high, compareFn)
        else if (compareFn(element, value) === Compare.BIGGER_THAN)
            return binarySearchRecursive(array, value, low, mid - 1, compareFn)
        else return mid 
    }
    return DOES_NOT_EXIST
}
export function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    const low = 0
    const high = sortedArray
    return binarySearchRecursive(sortedArray, value, low, high, compareFn)
}