function changeValue(){
    let h = 2
    data = ''
    let posX = +prompt('Enter the position of X:')
    let posY = +prompt('Enter the position of Y:')
    if(h % 2 === 0){
        board[posX][posY] = 'o'
    }else {
        board[posX][posY] = 'x'
    }
    h++
    for (let i = 0; i < 5; i++) {
        data += '<br>'
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&nbsp;&nbsp;'
        }
    }
    document.getElementById('caroGame').innerHTML = data
}

function handleWinLose(){

}

let board = []
let data = ''
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