//Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,  in ra các phần tử trong mảng.
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ]
// for (let i = 0; i < a.length; i++) {
//     console.log('row',i)
//     for (let j = 0; j < a[i].length ; j++) {
//         console.log(a[i][j])
//     }
// }

//Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"
function getArray(num, arr){
    num = +prompt('Nhap so luong phan tu mang')
    let print = 0
    for (let i = 0; i < num; i++) {
        print = prompt('index ' + i)
        arr.push(print)
    }
}

// let num, arr = []
// getArray(num, arr)
// console.log(arr)
// let last = arr.length - 1, first = 0
// while (first < last){
//     let temp = arr[first]
//     arr[first] = arr[last]
//     arr[last] = temp
//     first++
//     last--
// }
// console.log(arr)

// Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng.
// let num, arr = []
// getArray(num, arr)
// let str = arr.join('')
// console.log(arr)
// console.log('So ki tu trong mang',str.length)

//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
// let str = prompt('Nhap chuoi')
// let count = 1
// for (let i = 0; i < str.length; i++) {
//     if(str[i] == ' ') count++
// }
// console.log('so tu trong mang la',count)

//Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
// let str1 = prompt('nhap chuoi 1')
// let str2 = prompt('nhap chuoi 2')
// let count = 0, len = str1.length
// for (let i = 0; i < len; i++) {
//     if(str1[i] == str2[i]) count++
// }
// if(count === len) console.log('Hai chuoi giong nhau')
// else console.log('Hai chuoi khac nhau')

//Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
// let arr = [], num
// getArray(num, arr)
// for (let i = 0; i < arr.length; i++) {
//     if( arr[i] == '-') arr[i] = '_'
// }
// console.log(arr.join(''))
