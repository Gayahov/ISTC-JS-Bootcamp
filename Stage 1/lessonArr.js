
var arr = [3, 4, 12, 15, 8, 5];
var min = arr[0];
for (var i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);

var arr = [3, 4, 6, 1, 12, 5];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    console.log(max, arr[i]);
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

var arr = [4, 5, 9, 8, 18, 1] //?
var max = arr[0];
for (var i = 1; i < arr.length; i++){
    console.log(max, arr[i]);
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

var arr = [21, 103, 3, 524, 200, 158, 198, 6, 19];
for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr.length; j++){
        if (arr[i] < arr[j]){
            var min = arr[i];
            arr[i] = arr[j];
            arr[j] = min;
        }   
    }    
}
console.log(arr);*/

var arr = [4, 5, 9, 8, 18, 1];
    ///arr.pop() // remove last element
//console.log(arr)
    //arr.push(48);//add new element
//console.log(arr)
//arr.splice(2,0, 11, 12);

arr.splice(1,2);
console.log(arr)
