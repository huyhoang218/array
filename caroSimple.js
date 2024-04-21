let data = ""
let board = []
for (let i = 0; i < 5; i++) {
    board[i] = [0, 0, 0, 0, 0]
}
for (let i = 0; i < 5; i++) {
    data += '<br>'
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + '&nbsp;&nbsp;'
    }
}
document.getElementById('caroGame').innerHTML = data

function changeValue() {
    let posX = prompt('X: ')
    let posY = prompt('y: ')
    data = ""
    board[posX][posY] = "x"
    for (let i = 0; i < 5; i++) {
        data += '<br>'
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&nbsp;&nbsp;&nbsp;&nbsp;'
        }
    }
    document.getElementById('caroGame').innerHTML = '<hr/>' + data
}