function factorize(n) {
    var fact = 1;
    for(var i=1;i<=n;i++) {
        fact*=i;
    }

    return fact;
}

console.log(factorize(5));
console.log(factorize(10));
console.log(factorize(20));
console.log(factorize(0));