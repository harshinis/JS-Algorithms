function palindrome(str) {
    
    var front = 0;
    var back = str.length-1;

    while(back>front) {
        while(str[front].match(/[\W_]/)) {
            front++;
            continue;
        }

        while(str[back].match(/[\W_]/)) {
            back--;
            continue;
        }

        if(str[front].toLowerCase() !==str[back].toLowerCase()) return false;
        front++;
        back--;
    }

    return true;
}

console.log(palindrome("eye"));
console.log(palindrome("sfkhksjf"));
console.log(palindrome("abcddcba"));
console.log(palindrome("efkjh"));