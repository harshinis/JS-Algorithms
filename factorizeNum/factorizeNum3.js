function factorize(n) {
    
    for(var a=1; n>=1; n--) {
        a*=n;
    }

    return a;
}

console.log(factorize(5));
console.log(factorize(10));
console.log(factorize(20));
console.log(factorize(0));