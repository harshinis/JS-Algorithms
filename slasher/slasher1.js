function slasher(arr, target) {

    var res = [];
    for(var i=target;i<arr.length;i++){
        res.push(arr[i]);
    }

    return res;

}

console.log(slasher([1,2,3], 2));
console.log(slasher([1,2,3,4,5,6,7], 2));

