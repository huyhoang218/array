let arr = [-3, 5, 1, 3, 2, 10]
let index = 0, max = arr[0]
for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max){
        max = arr[i]
        index = i
    }
}
alert("max: " + max + " at position " + index);