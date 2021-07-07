


var add_help = function(a,b){
    let res = new Array(32).fill(0);
    for (let i = 0; i < 32; i++) {
        let tempa = a >> i & 1;
        let tempb = b >> i & 1;
        if(tempa === tempb){
            if(tempb === 1){
                let tempindex = i + 1;
                while(res[tempindex] !== 0){
                    tempindex++
                }
                res[tempindex] = 1;
            }
        }else{
            res[i] = 1;
        }       
    }
    const str = res.reverse().join('');
    return parseInt(str,2);
}

// a>0 b < 0
var sub_help = function(a,b){
    let res = new Array(32).fill(0);
    for (let i = 0; i < 32; i++) {
        let tempa = a >> i & 1;
        let tempb = b >> i & 1;
        if(tempa === tempb){
            res[i] = 0;
        }else{
            // res[i] = 1;
            if(tempa > tempb){
                res[i] = 1;
            }else{

            }
        }       
    }
    const str = res.reverse().join('');
    return parseInt(str,2);
}

/**
 * 写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
 * a, b 均可能是负数或 0

 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var add = function(a, b) {
    if(a === 0){
        return b
    }
    if(b === 0){
        return a;
    }
    let  res = 0;
    if( a > 0 && b> 0){
        res = add_help(a,b)
    }else if(a <0 && b < 0){
        res = 0 - add_help(-a,-b)
    }
    console.log(res)
    return res;
};
add(-1,-1);