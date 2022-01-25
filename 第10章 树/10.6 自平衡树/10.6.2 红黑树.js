import {
    defaultCompare,
    Compare
} from "../../util/defaultCompare.js";
import BinarySearchTree from "../10.3 二叉树和二叉搜索树/10.3.1 创建BinarySearchTree类.js";
import Node from "../../models/node.js";
const Colors = {
    RED: 1,
    BLACK: 2
}
export default class RedBlackNode extends Node {
    constructor(key) {
        super(key)
        this.key = key
        this.color = Colors.RED
        this.parent = null
    }
    isRed() {
        return this.color === Colors.RED
    }
}
// 10.6.2 红黑树
export default class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = compareFn
        this.root = null
    }
    // 向红黑树插入节点
    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackTreeNode(key)
            this.root.color = Colors.BLACK
        } else {
            const newNode = this.insertNode(this.root, key)
            this.fixTreeProperties(newNode)
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackTreeNode(key)
                node.left.parent = node
                return node.left
            } else return this.insertNode(node.left, key)
        } else if (node.right == null) {
            node.right = new RedBlackTreeNode(key)
            node.right.parent = node
            return node.right
        } else return this.insertNode(node.right, key)
    }
    // 插入节点后验证红黑树属性
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.isRed() && node.isRed()) { // 当父和子都是红
            let parent = node.parent
            const grandParent = parent.parent
            if (grandParent && grandParent.left === parent) { // 父是左
                const uncle = grandParent.right
                if (uncle && uncle.isRed()) { // 叔是红，平衡 —— 重新填色
                    grandParent.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grandParent
                } else { // 叔是黑，不平衡 
                    if (node === parent.right) // 父是左，子是右 —— 两次旋转
                        this.rotationRR(parent) // 以父为根，右-右旋转
                    // 父是左，子是左 —— 一次旋转
                    this.rotationLL(grandParent) // 以爷为根，左-左旋转
                    parent.color = Colors.BLACK // 设父为黑
                    grandParent.color = Colors.RED // 设爷为红
                    node = parent // node 指向父
                    parent = node.parent // parent 指向爷
                }
            } else { // 父是右
                const uncle = grandParent.left
                if (uncle && uncle.isRed()) { // 叔是红，平衡 —— 只需重新填色
                    grandParent.color = Colors.RED
                    parent.colors = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grandParent
                } else { // 叔是黑，不平衡
                    if (node === parent.left) { // 父是右，子是左 —— 两次旋转
                        this.rotationLL(parent) // 以父为根，左-左旋转
                    }
                    // 父是右，子是右 —— 一次旋转
                    this.rotationRR(grandParent) // 以爷为根，右-右旋转
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                    parent = node.parent
                }

            }
        }
        return this.root.color = Colors.BLACK // 保证根节点是黑的
    }
    // 红黑树旋转
    rotationLL(node) {
        const tmp = node.left 
        node.left = tmp.right
        if (tmp.right && tmp.right.key)
            tmp.right.parent = node
        tmp.parent = node.parent
        if (!node.parent) this.root = tmp
        else {
            if (node === node.parent.left)
                node.parent.left = tmp
            else node.parent.right = tmp
        }
        tmp.right = node
        node.parent = tmp
    }
    rotationRR(node) {
        const tmp = node.right
        node.right = tmp.left
        if (tmp.left && tmp.left.key)
            tmp.left.parent = node
        tmp.parent = node.parent
        if (!node.parent) this.root = tmp
        else {
            if (node === node.parent.left)
                node.parent.left = tmp
            else
                node.parent.right = tmp
        }
        tmp.left = node
        node.parent = tmp
    }

}