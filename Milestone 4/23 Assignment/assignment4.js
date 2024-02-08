
console.log("=== Problem-01 ===");
function calculateMoney(ticketSale){
    // let income = ticketSale * 120;
    // let cost = 500 + (8 * 50);
    // ticketSale = parseInt(ticketSale); //Avoid floating inputs

    if(ticketSale >= 0){
        return (ticketSale * 120 ) - ( 500 + (8 * 50));
    }
    else{
        return "Ticket sale number must be greater than zero(0).";
    }
    
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));



console.log("=== Problem-02 ===");
function checkName(name){
    let checkType = typeof(name);

    if(checkType === "string"){

        let lastLetter = name.charAt(name.length-1);
        let letterCase = lastLetter.toLowerCase();

        if(letterCase == 'a' || letterCase == 'y' || letterCase == 'i' || letterCase == 'e' || letterCase == 'o' || letterCase == 'u' || letterCase == 'w'){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));



console.log("=== Problem-03 ===");

function deleteInvalids(array){
    
    let arrayType = Array.isArray(array);

    if(arrayType == true ){
        
        let newArray = [];
        
        for(let i = 0; i < array.length; i++){

            let valueType = typeof(array[i]);
            // return (valueType);
            
            if(valueType === "number" && !isNaN(array[i])){
                newArray.push(array[i]);
            }
        }
        return newArray;

    }
    else{
        return "Invalid Array";
    }
}

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ] ));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ));



console.log("=== Problem-04 ===");
function password(obj){

    let objKeys = Object.keys(obj);
    let objKeysLength = objKeys.length;

    let objValues = Object.values(obj);

    let name = objValues[0];
    let birthYear = objValues[1];
    let siteName = objValues[2];

    let birthArray = Array.from(String(birthYear), Number);
    let birthArrayLength =  birthArray.length;

    if(birthArrayLength == 4 && objKeysLength == 3){
        let password1 = siteName.charAt(0).toUpperCase() + siteName.slice(1); 
        /*charAt(0)-> select first character of the string
        toUpperCase()-> transform the character into uppercase
        slice(1)-> select the remainder of the string starting from index 1*/
        return password1 + '#' + name + '@' + birthYear;
    }
    else{
        return "invalid";
    }
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));



console.log("=== Problem-05 ===");
function monthlySavings(arr, livingCost){

    let firstParameterType = Array.isArray(arr);
    let secondParameterType = typeof(livingCost);

    if(firstParameterType === true && secondParameterType === 'number' || !isNaN(secondParameterType)){
        
        let totalIncome = 0;

        for(let i=0; i<arr.length; i++){

            let income = arr[i];
            
            if(income >= 3000){
                let tax = (income * 20) / 100;
                let taxFreeIncome = income - tax;
                totalIncome += taxFreeIncome;
            }
            else{
                totalIncome += income;
            }
        }
        let savings = totalIncome - livingCost;

        if(savings >= 0){
            return savings;
        }
        else{
            return "earn more";
        }
    }
    else{
        return "invalid input";
    }
    
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));

