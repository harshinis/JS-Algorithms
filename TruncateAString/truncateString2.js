function truncateString(str, num) {

    if(str.length>num) {
        return str.slice(0, num>3? num-3:num) +'...';
    }
    return str;
    
}


console.log(truncateString('orange',1));
console.log(truncateString('orange',3));
console.log(truncateString('orange',7));
console.log(truncateString('orange',9));