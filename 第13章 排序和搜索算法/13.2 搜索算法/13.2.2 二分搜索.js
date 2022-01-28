import {
    defaultCompare,
    Compare
} from "../../util/defaultCompare.js";
import {
    quickSort
} from "../13.1 排序算法/13.1.5 快速排序.js";

// 13.2.2 二分搜索
export function binarySearch(array, value, compareFn = defaultCompare) {
    const sortedArray = quickSort(array)
    let low = 0
    let high = sortedArray.length - 1
    while (lesserOrEquals(low, high, compareFn)) {
        const mid = Math.floor((high - low) / 2) + low
        const element = sortedArray[mid]
        if (compareFn(element, value) === Compare.LESS_THAN) low = mid - 1
        else if (compareFn(element, value) === Compare.BIGGER_THAN) high = mid + 1
        else return mid
    }
    return DOES_NOT_EXIST
}
function lesserOrEquals(a, b, compareFn) {
    const comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}