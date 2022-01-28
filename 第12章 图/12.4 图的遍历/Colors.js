export const Colors = {
    WHITE: 0, // 还没有被访问
    GREY: 1, // 被访问过，但并未被探索过
    BLACK: 2 // 被访问过，并且被完全探索过
}
export const initializeColor = vertices => {
    const color = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }
    return color
}