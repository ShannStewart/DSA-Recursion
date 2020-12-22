function place(num){
    if (num === 1){
        return 1
    }

    //console.log(num);
    return num + place(num - 1);
}

function nth(n){

    if (n === 0){
        return 0;
    }

    if (n === 1){
        return 1;
    }

    return place(n);

}

console.log(nth(5));