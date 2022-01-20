let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//在任意位置添加或删除元素
//删除了从数组索引5开始的3个元素:numbers[5],numbers[6],numbers[7]
numbers.splice(5, 3)
//把数2，3，4插入数组，放到之前删除元素的位置上
numbers.splice(5, 0, 2, 3, 4)

//最终
numbers.splice(5, 3, 2, 3, 4)