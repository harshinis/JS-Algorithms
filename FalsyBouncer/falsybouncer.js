
//Falsy values: false, null, 0, "", undefined, and NaN


var falsyArr = [0,1,2,3,null,5,"",7,8,undefined, 10, NaN, 12, 13, false]

function falsyBouncer(arr) {

    return arr.filter(Boolean);

}

console.log(falsyBouncer(falsyArr));