function mutation(arr) {

    return arr[1].toLowerCase().split('').every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter)!==-1;
    })

}

console.log(mutation(["Hello","helo"]));
console.log(mutation(["hello","hey"]));
console.log(mutation(["Alien","line"]));

