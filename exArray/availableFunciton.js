//Bài 1

// let myCorlor = ['Red', 'Green', 'While', 'Black']
// let arr = myCorlor.join()
// console.log(arr)

//Bài 2
//
// let num = prompt('Enter a number')
// let convertStr = num.toString()
// let result = [num[0]]
// for (let i = 1; i < convertStr.length; i++) {
//     if(convertStr[i] % 2 == 0 && convertStr[i - 1] % 2 == 0){
//         result.push('-', convertStr[i])
//     }else {
//         result.push(convertStr[i])
//     }
// }
// console.log(result.join(''))

// Bài 3
// let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// let lower = 'abcdefghiklmnopqrstuwxyz'
// let str = prompt('Enter a string')
// let result = [], len = str.length
// for (let i = 0; i < len; i++) {
//     if(upper.indexOf(str[i] !== -1)){
//         result.push(str[i].toLowerCase())
//     }else if(lower.indexOf(str[i] !== -1)){
//         result.push(str[i].toUpperCase())
//     }else result.push(str[i])
// }
// console.log(result.join(''))

// // Điểm trung bình lớp
// let num = +prompt('So luong diem trung binh')
// let arr = []
// let sum = 0
// for (let i = 0; i < num; i++) {
//     arr[i] = +prompt('Nhap diem cua hoc sinh ' + i)
//     if( arr[i] < 0 || arr[i] > 10 || isNaN(arr[i])) arr[i] = +prompt('Nhap lai diem cua hoc sinh ' + i)
//     // let convert = eval(arr[i])
//     // sum += convert
//     sum += arr[i]
// }
// let arv = sum/num
// console.log(arr)
// console.log('diem trung binh lop: ' + arv)