import {
    bubbleSort
} from "./13.1 排序算法/13.1.1 冒泡排序.js"
import {
    selectionSort
} from "./13.1 排序算法/13.1.2 选择排序.js"

// test
console.log('----------冒泡排序---------')

function creatNonSortedArray(size) {
    const array = []
    for (let i = size; i > 0; i--) {
        array.push(i)
    }
    return array
}
let array = creatNonSortedArray(5)
console.log(array.join())
array = bubbleSort(array)
console.log(array.join())
console.log('--------------选择排序----------------')
array = creatNonSortedArray(5)
console.log(array.join())
array = selectionSort(array)
console.log(array.join())
console.log('---------------插入排序-------------')