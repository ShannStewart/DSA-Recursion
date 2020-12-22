function reverseString(reverse){

    if(reverse === ""){
        return "";
    }

    return reverseString(reverse.substring(1)) + reverse.charAt(0);
    

}

console.log(reverseString("Zack"));