function findLongestWord(str) {
    str = str.split(' ');

    if(str.length==1) {
        return str[0];
    }

    if(str[0].length >= str[1].length) {
        str.splice(1,1);
        return findLongestWord(str.join(' '));
    }

    if(str[0].length <= str[1].length) {
        
        return findLongestWord(str.slice(1,str.length).join(' '));
    }
    return str;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
