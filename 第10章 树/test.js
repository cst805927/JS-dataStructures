//test
import BinarySearchTree from "./10.3 二叉树和二叉搜索树/10.3.1 创建BinarySearchTree类.js"
const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// 10.4 树的遍历
// 10.4.1 中序遍历
console.log('----------中序遍历-------------')
const printNode = (value) => console.log(value)
tree.inOrderTraverse(printNode)
// 10.4.2 先序遍历
console.log('----------先序遍历-------------')
tree.preOrderTraverse(printNode)
// 10.4.3 后序遍历
console.log('----------后序遍历-------------')
tree.postOrderTraverse(printNode)
// 10.5 搜索树中的值
// 10.5.2 搜索一个特定的值
console.log('----------搜索一个特定的值-------------')
console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.') // Key 1 not found.
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.') // Key 8 found.



