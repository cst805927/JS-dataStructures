// 9.3.2 递归求斐波那契数
function fibonacci(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}