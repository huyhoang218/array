let arr = [-3,5,1,3,2,10]
let first = 0
let last = arr.length -1
while (first < last){
    let medium = arr[first]
    arr[first] = arr[last]
    arr[last] = medium
    first++
    last--
}
document.write(arr)