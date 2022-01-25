import { defaultCompare } from "../../util/defaultCompare.js";
import MinHeap from "./11.1.1 创建最小堆.js";
import { reverseCompare } from "../../util/reverseCompare.js";

// 11.1.2 创建最大堆类
export default class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }
}