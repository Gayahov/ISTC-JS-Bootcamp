
    //task1
function roundNumber (par1, par2) {
    var x = par1;
    var y = par2;
        console.log(x.toFixed(y));
}
 roundNumber (45.265, 3);


    //task2
function isNaturalNumber (par) {
    if (typeof(par) !== "number") {
    console.log("Please, insert a number.");
        } else {
             if (par >= 0 && Math.floor(par)===par && n !== Infinity) {
                console.log("Natural number.");
        } else {
            console.log("This is not a natural number!!");
        }
    } 
 };
isNaturalNumber(-10.33)
