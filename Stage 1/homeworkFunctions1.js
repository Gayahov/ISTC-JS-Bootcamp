    //task1
    function calculator2 (par1, par2, par3) {
        switch (par2){
            case "+":
                console.log(par1 + par3);
                    break;
            case "-":
                console.log(par1 - par3);
                    break;
            case "*":
                console.log(par1 * par3);
                    break;
            case "/":
                console.log(par1 / par3);
                     break;
            case "%":
                 console.log(par1/100*par3);
                    break;
                default:
            console.log("function not valid");
                                   
        }
    }
     calculator2(80, "%", 5)
        
        
    function calculator (par1, par2, par3){
        if (par2 == "+"){
            console.log(par1 + par3);
        }else if (par2 == "-"){
            console.log(par1 - par3); 
        }else if (par2 == "*"){
            console.log(par1 * par3);
        }else if(par2 == "/"){
            console.log(par1 / par3);
        }else if (par2== "%"){
        console.log(par1/100*par3);
            
        }
                
    }
    calculator (3,"%",6);
                
    function datatype (par1, par2,par3,par4) {
        console.log(typeof(par1));
        console.log(typeof(par2));
        console.log(typeof(par3));
        console.log(typeof(par4));
        
        var num = 0;
        var str = "";
        if (typeof(par1) == "number"){
             num += par1;
        }else {
            str += par1;
        }
        if (typeof(par2) == "number"){
            num += par2;
        }else {
            str += par2;
        }
        if (typeof(par3) == "number"){
            num += par3;
        }else {
            str += par3;
        }
        if (typeof(par4) == "number"){
            num += par4;
        }else {
            str += par4;
        }
        console.log(num,str);
    };
            
    datatype(5,5, 5,"hello");
            
           
