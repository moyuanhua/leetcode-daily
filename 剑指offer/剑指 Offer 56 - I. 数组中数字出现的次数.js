/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
         temp ^= nums[i];
    }

    let a =0;
    let b =0;
    // div 是temp中的最低位的1
    let div = 1;
    while((div & temp) === 0){
        div <<= 1;
    }

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if( (div & item) === 0 ){
            a ^= item
        }else{
            b ^= item
        }
    }
    return [a,b]
};