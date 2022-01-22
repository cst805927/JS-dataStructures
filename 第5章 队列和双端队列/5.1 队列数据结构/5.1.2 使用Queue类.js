// 5.1.2 使用Queue类
const queue = new Queue()
console.log(queue.isEmpty()) // true
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString()) // John, Jack
queue.enqueue('Camila')
console.log(queue.toString()) // John, Jack, Camila
console.log(queue.size()) // 3
console.log(queue.isEmpty()) // false
queue.dequeue() // 移除John
queue.dequeue() // 移除Jack
console.log(queue.toString()) // Camila