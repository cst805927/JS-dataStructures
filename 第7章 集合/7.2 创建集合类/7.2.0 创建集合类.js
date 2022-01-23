// 7.2 创建集合类
export default class Set {
    constructor() {
        this.items = {}
    }
    // 7.2.1 has(element)
    has(element) {
        // this.items.hasOwnProperty有可能被改写，所有下面代码更安全
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }
    // 7.2.2 add
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    // 7.2.3 delete 和 clear
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    clear() {
        this.items = {}
    }
    // 7.2.4 size
    // 1. 使用this.count变量
    // 2. ES6：使用Object.keys()
    size() {
        return Object.keys(this.items).length
    }
    // 3. 手动提取所有属性（向下兼容）
    sizeLegacy() {
        let count = 0
        for (let key in this.items) {
            if (this.has(key)) count++ // 对象原型可能包含其它属性，所以要先判断key是否属于this.items 
        }
        return count
    }
    // 7.2.5 values
    values() {
        return Object.values(this.items)
    }
    // 7.3.1 并集
    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }
    // 7.3.2 交集
    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i]))
                intersectionSet.add(values[i])
        }
        return intersectionSet
    }
    // 7.3.3 差集
    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach(value => {
            if (!otherSet.has(value))
                differenceSet.add(value)
        })
        return differenceSet
    }
    // 7.3.4 子集
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) return false
        let isSubset = true
        this.values().forEach(value => {
            if(!otherSet.has(value))
                isSubset = false
        })
        return isSubset
    }
}