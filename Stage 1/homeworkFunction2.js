    // Task 1 
function isPrime(num) {

if (num === 2) {
  return true;
}
else if(num > 1){
  for (var i = 2;  i < num; i++) {

    if (num % i !== 0 ) {
      return true;
    }

    else if (num === i * i) {
      return false;
    };
};
};
console.log(isPrime(121));

    // Task 2
function typeOfArgument(parameter) {
var dataType = {

   key1: "number", 

   key2: "string",

   key3: "boolean",

   key4: "undefined", 

   key5: "null", 

   key6: "array", 

   key7: "object", 

   key8: "function",
 };
 for (var key in dataType) {
                if (dataType[key] == typeof parameter) {
                    console.log(dataType[key]);
                }
            }
   }



   typeOfArgument("array");



 // Task 3
 function adress (p1, p2, p3) {
    var myAdress = {
        city: p1,
        Street: p2,
        home: p3
    };
    return(myAdress)
}
console.log(adress("Yerevan", "Teryan", 23));

// task 4 /*

function square(par){
     if(typeof(par) == "number" && par != 0){
         console.log(par * par);
     }else{
         console.log("Oops!")
     }
 };
 square(3);
