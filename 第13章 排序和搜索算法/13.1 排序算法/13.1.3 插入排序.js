import { defaultCompare, Compare } from "../../util/defaultCompare.js";

// 13.1.3 ζε₯ζεΊ
export function insertionSort(array, compareFn = defaultCompare) {
    const { length } = array
    let temp
    for (let i = 1; i < length; i++) {
        let j = i
        temp = array[i]
        while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array
}