function slasher(arr, target) {

    arr.splice(0,target);

    return arr;

}

console.log(slasher([1,2,3], 2));
console.log(slasher([1,2,3,4,5,6,7], 2));

