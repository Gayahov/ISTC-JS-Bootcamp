    // Task 1
var baby = 3;
var teen = 10;
var adult = 20;
var age;


if (age > baby) {
    console.log('Hi, baby!'); //false
} else if (age < teen) {
    console.log('Hello Teen!');//false
};
console.log(age); //undefined

    // Task 2
if (baby > teen) {
    console.log('Hi, baby!'); //false
} else if (adult > teen) {
    console.log('Hello Adult!');//true 
} else if (teen != baby){
    console.log('Hello Teen');//true
}else {
    console.log('Goodbye')
};

    //Task 3
var x = 5;
var y = 12;
var z = 61;

if (x>y&&z>x){
    console.log(x+y);
}else {
    console.log(z - x + y);
}
    //Task 4
if (x+y<z ||z-y>x){
    console.log("'z' is greater than 'x' and 'y'");
}else {
    console.log("inequality is wrong");
}

    //Task 5
    var x = 1 + 100 * 5;
        console.log(x) //501
    var y = (1 + 100) * 5;
        console.log(y) //505

    // Task 6
 var user = { name: "John", age: 18 };
     user.age = prompt('How old are you?', );

if (user.age <= 18) {
    alert("Hi, You can`t register!");
} else  {
    alert("Welcome!");
}
