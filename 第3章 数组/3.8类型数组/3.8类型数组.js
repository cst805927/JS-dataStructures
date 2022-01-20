//3.8类型数组
//类型数组存储单一类型的数据
const length = 3
const int16 = new Int16Array(length)

const array16 = []
array16.length = length
for(let i = 0; i < length; i++) {
    int16[i] = i + 1
}
console.log(int16)