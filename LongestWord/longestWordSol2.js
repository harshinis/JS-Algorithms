function findLongestWord (str) {
    return str.split(' ').reduce(function(x,y) {
        Math.max(x, y.length)
    }, 0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));