function repeatString(str,num) {
    return (num>0)?str.repeat(num):"";
}

console.log(repeatString("Hello World",3));
console.log(repeatString("Hello World",-1));