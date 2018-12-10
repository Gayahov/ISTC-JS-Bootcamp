    //task 1 
    function greeting(str,n) {
              if (n > 0) {
                 return str.repeat(n);    
              } else {  return str.repeat(2) ;}
          }  
              console.log(greeting("the sun is shinning ", 2)) ; 



    //task2
var arr1 = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6];
var arr2 = [];

for (var i = 0; i< arr1.length; i++){
    //console.log(arr1[i]);
    if ( Array.isArray(arr1[i])){
        console.log(arr1[i]);
        arr2.push(arr1[i]);
    }
};
console.log((arr2));


    //task 3
    

function checkPalindrome(str) {    
    var l = str.length;
    for (var i = 0; i < l / 2; i++) {
        if (str.charAt(i) !== str.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("abba"))

