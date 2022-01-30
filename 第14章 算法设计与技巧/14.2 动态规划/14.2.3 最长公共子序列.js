// 14.2.3 最长公共子序列
export function ics(wordX, wordY) {
    const m = wordX.length
    const n = wordY.length
    const l = []
    for (let i = 0; i <= m; i++) l[i] = []
    for (let j = 0; j <= n; j++) l[i][j] = 0
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) l[i][j] = 0
            else if (wordX[i - 1] === wordY[j - 1]) l[i][j] = l[i - 1][j - 1] + 1
            else {
                const a = l[i - 1][j]
                const b = l[i][j - 1]
                l[i][j] = a > b ? a : b
            }
        }
    }
    return l[m][n]
}
export function printSolution(solution, wordX, m, n) {
    let a = m
    let b = n
    let x = solution[a][b]
    let answer = ''
    while (x !== '0') {
        if (solution[a][b] === 'diagonal') {
            answer = wordX[a - 1] + answer
            a--
            b--
        } else if (solution[a][b] === 'left') b--
        else if (solution[a][b] === 'right') a--
        x = solution[a][b]
    }
    console.log('lcs: ' + answer)
}