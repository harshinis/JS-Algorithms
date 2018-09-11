function largestofFour(arr) {
    var res = [];

    for(var n=0;n<arr.length; n++) {
        var largestN = arr[n][0];

        for(var sb=0; sb<arr[n].length; sb++) {
            if(arr[n][sb]>largestN) {
                largestN = arr[n][sb];
            }
        }
        res[n] = largestN;
        //or use res.push(largestN);
    }

    return res;
}

console.log(largestofFour([
    [583,999,113,55],
    [600,187,798,444],
    [1023,77,832,285],
    [83,99,113,555]
]));
