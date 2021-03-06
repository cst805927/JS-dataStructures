import {
    defaultCompare,
    Compare
} from "../../util/defaultCompare.js";
import {
    swap
} from "../../util/swap.js";

// 13.1.2 ιζ©ζεΊ
export function selectionSort(array, compareFn = defaultCompare) {
    const {
        length
    } = array
    let indexMin
    for (let i = 0; i < length - 1; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN)
                indexMin = j
        }
        if (i !== indexMin) swap(array, i, indexMin)
    }
    return array
}