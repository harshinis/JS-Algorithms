function findLongestWord(str) {
    var maxLength = 0, res="";
    var words = str.split(" ");

    for(var i=0;i<words.length; i++) {
        if(words[i].length >maxLength) {
            maxLength=words[i].length;
            res=words[i];
        }
    }

    return res;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
