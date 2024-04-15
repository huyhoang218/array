let value = prompt('Enter a number:')
let arr = [-3, 5, 1, 3, 2, 10]
let index
for (let i = 0; i < arr.length; i++) {
    if(value == arr[i]){
        index = i
    }
}
if(index >= 0){
    document.write('value ' + value + ' found at ' + index)
}
else {
    document.write("Value " + value + " not found")
}