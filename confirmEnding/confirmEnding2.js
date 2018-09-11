function confirmEnding(str, target) {
    if(str.substr(str.length-target.length,str.length)!==target) {
        return false;
    } else {
        return true;
    }
}

console.log(confirmEnding('He has to give me a new num','num')); 