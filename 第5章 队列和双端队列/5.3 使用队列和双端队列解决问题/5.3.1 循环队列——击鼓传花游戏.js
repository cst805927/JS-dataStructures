// 5.3.1 循环队列——击鼓传花游戏
function hotPotato(elementsList, num) {
    const queue = new Queue()
    const eliminatedList = []
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]) // 把名字全部加进队列
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()) // 从开头移除一项，并将其添加到末尾
        }
        eliminatedList.push(queue.dequeue()) // 淘汰的一人，从队列中移除，并添加到淘汰名单
    }
    return {
        eliminated: elementsList,
        winner: queue.dequeue()
    }
}
// 尝试hotPotato算法
const name = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(name, 7)
result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中被淘汰。`)
})
console.log(`胜利者: ${result.winner}`)