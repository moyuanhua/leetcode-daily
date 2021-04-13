/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // 首先是首字母排序
    let sortarr = new Array(10).fill(null);
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        let first = String(value)[0];
        sortarr[first] =  addToArr(value,sortarr[first]);
    }
    if(sortarr[0] && sortarr[0].length === nums.length){
        return '0'
    }
    let str = ''
    for (let i = sortarr.length -1; i >= 0; i--) {
        const item = sortarr[i];
        if(item && item.length){
            str += item.join('');
        }
    }
    return str;
};

var addToArr = function(val,arr=[]){
    if(!arr){
        return [val]
    }
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        // 首字母相同 1 12 或者 4 41 或者 45 46
        // 把两个数进行拼接
        if(isPrev(val,temp)){
            arr.splice(i,0,val)
            return arr;
        }
    }
    arr.push(val);
    return arr;
}

var isPrev = function(v1,v2){
    let prev = Number(String(v1) + String(v2));
    let end = Number(String(v2) + String(v1));
    return prev > end;
}

// @lc code=end
// largestNumber([10,2]);

