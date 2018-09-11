function repeatString(str,num) {
    if(num>0) {
        return str.repeat(num);
    }
    else {
        return ""; 
    }
}

console.log(repeatString("Hello World",3));
console.log(repeatString("Hello World",-1));