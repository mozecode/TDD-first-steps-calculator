'use strict';

module.exports=(num1, num2)=>{//immediately parse input just in case
    if(num1, num2){//they have to enter something, otherwise assign values
        if (typeof num1=== "number" && typeof num2=== "number"){//if user input ok, go for it.
            let sum = num1+num2;
            return sum;
        }else{//if they entered a string of some sort
            if(typeof num1==="string" || typeof num2 ==="string"){
                num1= ~~num1;  //bitwise not returns value of zero for a string character, handles decimals with rounding down?.
                num2 = ~~num2;
                let sum = num1+num2;
                console.log("Please enter two integers. Default values of zero entered in place of strings.")
                return sum;
            }
        }
    }else{//if user enters nothing
        let num1= 0;
        let num2 = 0;
        console.log ("Default values entered.  Please enter two integers and try again.")
        let sum = num1+num2;
        return sum;
    }
}