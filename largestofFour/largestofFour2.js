function largestofFour(arr) {
    
    return arr.map(function(sb) {
        return sb.reduce(function(curr,prev) {
            return (curr>prev)?curr:prev;
        })
    })
}

console.log(largestofFour([
    [583,999,113,55],
    [600,187,798,444],
    [1023,77,832,285],
    [83,99,113,555]
]));
