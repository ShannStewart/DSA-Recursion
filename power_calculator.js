function powerCalculator(num, exp){
    
    if (exp <= 0){
        return 1;
    }
    
    if (exp === 1){
        return num;
    }

    return num * powerCalculator(num, exp - 1);

}

console.log("Your calculation is: " + powerCalculator(10, 2));