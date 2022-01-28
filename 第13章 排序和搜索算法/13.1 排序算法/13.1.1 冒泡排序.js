// 13.1.1 冒牌排序
import {
    defaultCompare,
    Compare
} from '../../util/defaultCompare.js'
import {swap} from '../../util/swap.js'
export function bubbleSort(array, compareFn = defaultCompare) {
    const {
        length
    } = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN)
            swap(array, j, j + 1)
        }
    }
    return array
}
// 改进后的冒泡排序
export function modifiedBubbleSort(array, compareFn = defaultCompare) {
    const { length } = array
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN)
                swap(array, j, j + 1)
        }
    }
    return array
}