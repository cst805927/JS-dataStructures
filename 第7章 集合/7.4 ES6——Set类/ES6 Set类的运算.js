import Set from "../7.2 创建集合类/7.2.0 创建集合类"

// ES6 Set类的运算
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
// 1.模拟并集运算
const union = (setA, setB) => {
    const unionAB = new Set()
    setA.forEach(value => unionAB.add(value))
    setB.forEach(value => unionAB.add(value))
    return unionAB
}
console.log(union(setA, setB))
// 2.模拟交集运算
const intersection = (setA, setB) => {
    const intersectionAB = new Set()
    setA.forEach(value => {
        if (setB.has(value)) intersectionAB.add(value)
    })
    return intersectionAB
}
console.log(intersection(setA, setB))
// 3.模拟差集运算
const difference = (setA, setB) => {
    const differenceAB = new Set()
    setA.forEach(value => {
        if(!setB.has(value)) differenceAB.add(value)
    })
    return differenceAB
}
console.log(difference(setA, setB))
// 4. 使用扩展运算符
console.log(new Set([...setA, ...setB])) // 交集
console.log(new Set([...setA].filter(x => setB.has(x)))) // 交集
console.log(new Set([...setA].filter(x => !setB.has(x)))) // 差集