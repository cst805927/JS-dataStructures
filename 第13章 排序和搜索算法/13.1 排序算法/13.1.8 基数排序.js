// 13.1.8 基数排序
export function radixSort(array, radixBase = 10) {
    if (array.length < 2) return array
    const minValue = findMinValue(array)
    const maxValue = findMaxValue(array)
    let significantDigit = 1 // 从最后一位开始排序
    while ((maxValue - minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
    }
    return array
}
function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    const buckets = []
    const aux = []
    for (let i = 0; i < radixBase; i++) buckets[i] = 0 // 初始化桶
    for (let i = 0; i < array.length; i++) { // 计数排序
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        buckets[bucketsIndex]++
    }
    for (let i = 1; i < radixBase; i++) buckets[i] += buckets[i - 1] // 记录数的个数
    for (let i = array.length - 1; i >= 0; i--) { // 
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        aux[--buckets[bucketsIndex]] = array[i]
    }
    for (let i = 0; i < array.length; i++) array[i] = aux[i] // 将aux的值转移到array
    return array
}