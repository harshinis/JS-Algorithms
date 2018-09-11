function factorize(n) {
    
    if(n===0){
        return 1
    }

    return n*factorize(n-1);
}

console.log(factorize(5));
console.log(factorize(10));
console.log(factorize(20));
console.log(factorize(0));