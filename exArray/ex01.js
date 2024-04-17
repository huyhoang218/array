function checkNumber(num){
    if (num <= 0 || isNaN(num)) return false
    else return true
}
function checkInt(num){
    if(isNaN(num)) return false
    else return true
}
function enterArray(num, arr) {
    do {
        num = +prompt('Nhap so luong phan tu cua mang')
    } while (!checkNumber(num))
    for (let i = 0; i < num; i++) {
        arr[i] = +prompt('Nhap phan tu ' + i)
        if (!checkInt(arr[i])) arr[i] = +prompt('Nhap lai phan tu ' + i)
    }
}
//Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let num
// do {
//     num = +prompt('Nhap so luong phan tu cua mang')
// }while (!checkNumber(num))
// let arr = []
// for (let i = 0; i < num; i++) {
//     arr[i] = +prompt('index ' + i + ' =')
//     if(arr[i] >= 10) console.log(arr[i])
// }

//Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// let num
// do {
//     num = +prompt('Nhap so luong phan tu cua mang')
// }while (!checkNumber(num))
// let arr = []
// for (let i = 0; i < num; i++) {
//     arr[i] = +prompt('Nhap phan tu ' + i)
//     if(!checkNumber(arr[i])) arr[i] = +prompt('Nhap lai phan tu ' + i)
// }
// let max = arr[0]
// for (let i = 1; i < num; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(arr)
// console.log('max is:', max)
// console.log('index is:', arr.indexOf(max))

//Bài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.

// let num, arr = []
// enterArray(num,arr)
// let max = arr[0], sum = 0, avr = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     if(arr[i] > max) max = arr[i]
// }
// avr = sum/(arr.length)
// console.log('max is:', max)
// console.log('avr is:', avr)

//Bài 4 Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.

// let  num, arr = []
// enterArray(num, arr)
// let last = arr.length -1
// let first = 0
// while (first < last){
//     let medium = arr[first]
//     arr[first] = arr[last]
//     arr[last] = medium
//     first++
//     last--
// }
// // arr.reverse()
// console.log(arr)

//Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi

// let str = prompt('Enter a string')
// let arr = [], count = 0
// arr = str
// for (let i = 1; i < arr.length; i++) {
//     if(arr[i-1] == '-' && arr[i] > 0) count ++
// }
// console.log('Tong so nguyen am',count)

//Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình tìm xem V có nằm trong mảng số nguyên không? Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".

// let num, arr = []
// enterArray(num, arr)
// let intV
// do {
//     intV = +prompt('Nhap so nguyen V')
// }while (!checkInt(intV))
// let checkIntV = false
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === intV) {
//         checkIntV = true
//         //bai7
//         // arr.splice(i,1)
//         for (let j = i; j < arr.length; j++) {
//           arr[j] = arr[j+1]
//         }
//         arr[arr.length - 1] = 0
//     }
// }
//
// if(checkIntV === true) console.log('V is in the array')
// else console.log('V is not in the array')
// console.log(arr)

//Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

let num, arr = []
enterArray(num, arr)
let len = arr.length
let max = 0
for (let i = 0; i < len - 1; i++) {
    max = i
    for (let j = i + 1; j < len; j++) {
        if(arr[j] > arr[max]){
            max = j
        }
    }
    let temp = arr[i]
    arr[i] = arr[max]
    arr[max] = temp
}
console.log(arr)
//Bai 9 tuong tu