function trans(){
    let arrVn = ['quả táo', 'quyển sách', 'cái bàn']
    let arrEn = ['apple', 'book', 'table']
    let display = document.getElementById('display').value
    let indexEn = 0
    let trans = ''
    for (let i = 0; i < arrEn.length; i++) {
        if(display == arrEn[i]) {
            indexEn = i
            for (let j = 0; j < arrVn.length; j++) {
                if (j == indexEn) trans = arrVn[j]
            }
        }
    }
    document.getElementById('result').innerHTML = trans
}


