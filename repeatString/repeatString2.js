function repeatString(str,num) {
    if(num<0) return "";
    if(num===1) return str;
    else 
    return str+repeatString(str,num-1); 
}

console.log(repeatString("Hello World",3));
console.log(repeatString("Hello World",-1));