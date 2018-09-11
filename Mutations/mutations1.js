function mutation(arr) {

    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();

    for(var i=0;i<test.length; i++) {
        if(target.indexOf(test[i])===-1) {
            return false;
        }
    }

    return true;

}

console.log(mutation(["Hello","helo"]));
console.log(mutation(["hello","hey"]));
console.log(mutation(["Alien","line"]));

