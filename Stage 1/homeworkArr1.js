    //task 1
function myFunction(arr, x){
       console.log(arr.slice(0, x));
       
    }
    myFunction(["London","Milan","Paris","Madrid","Yerevan","Moscow"],4);

      // task 2
var arr =[7, 'a', 'a', 'a', 2, 7, 'a', 7, 'a', 2, 4, 9, 7];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++){
    for (var j=i; j<arr.length; j++){
        if (arr[i] == arr[j]){
            m++;
            }if (mf<m){
                mf=m; 
                item = arr[i];
                }
        }
        m=0;
};
console.log(item+" ( " +mf +" times ) ");
    

    //task 3
var arr = [3,2.3,4.2,6,8,2,5];
    var mult = 1;
    var sum = 0;
 for (var i = 0; i <arr.length; i++){
        console.log(5845)
        mult = mult * arr[i];
        sum = sum + arr[i]
};
console.log(mult);
console.log(sum);

    //task 4
var arr = [4, 11, 4, 4, 14, 11, 5, 2, 3, 8, 9, 5, 8, 6, 7];
    sorted_arr = arr.sort(function(a, b){return a - b})
    results = [];

 for (var i = 0; i< arr.length; i++) {
     if(arr[i+1] != arr[i]){
        results.push(arr[i]);
        
    }
};
console.log(sorted_arr);
console.log(results);
  
 // task 5
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
};
console.log(arr);