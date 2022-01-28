// 13.2.1 顺序搜索.js
const DOES_NOT_EXIST = -1
export function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0;i < array.length; i++) {
        if (equalsFn(value, array[i])) return i
    }
    return DOES_NOT_EXIST
}