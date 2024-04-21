function changeValue(){
    data = ''
    let posX = +prompt('Enter the position of X:')
    let posY = +prompt('Enter the position of Y:')
    if(temp % 2 === 0){
        board[posX][posY] = 'o'
    }else {
        board[posX][posY] = 'x'
    }
    temp++
    for (let i = 0; i < 5; i++) {
        data += '<br>'
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&nbsp;&nbsp;'
        }
    }
    document.getElementById('caroGame').innerHTML = data

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(board[i][j] == data) alert('')
        }
    }
}


let board = []
let data = ''
let temp = 2
for (let i = 0; i < 5; i++) {
    board[i] = ['(.)', '(.)', '(.)', '(.)', '(.)']
}
for (let i = 0; i < 5; i++) {
    data += '<br>'
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + '&nbsp;&nbsp;'
    }
}
document.getElementById('caroGame').innerHTML = data