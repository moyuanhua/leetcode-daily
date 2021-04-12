var gcb = function(x=0,y=0){
    // const big = x > y ? x : y;
    // const small = x > y ? y: x;
    if(x === 0) return y;
    return gcb(y % x,y);
}

console.log(gcb(6,6));