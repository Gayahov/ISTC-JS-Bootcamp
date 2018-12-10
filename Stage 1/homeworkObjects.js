     //Task 1
 var adress = {
        city : "Yerevan",
        street : "Abovyan",
        home: 5,
    }
 function myAdress(par1){
  
    console.log(adress.hasOwnProperty(par1))
}
 myAdress("piohuihj");
 
    //Task 2
var car = {
    brand : "Toyota",
    color : "white",
    year : 2016,
    hp : 230,
}
var i = 1;
for (var key in car){
    //console.log(i + "_"+key);
    if(i == 3){
        delete car[key];
        break
    }
    i++
};
console.log(car);

    //task 3
    var car = {
    owner: "GayaHov",
    brand : "Toyota",
    color : "white",
    year : 2016,
    hp : 230,
}
//var size = Object.keys(car).length;
//console.log(size);
var count = 0;
for (var key in car ){
    if(car.hasOwnProperty(key)){
        count++
    }
}
console.log(count);


    //task 4
var employee = {
    firstName               : "John",
    lastName                : "Smith",
    days                    : 20,
    daily_salary_usd        : 100,
    monthly_salary : function() {
        return this.daily_salary_usd * this.days;
    }
};
employee.yearly_salary = function() {
    return 12 * this.monthly_salary()
}

var m = employee.monthly_salary()
var y = employee.yearly_salary()

console.log(m);
console.log(y);







