/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = new Array(n);
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] =  i * 2 + start;
        res = res ^ arr[i];       
    }
    return res;
};
// @lc code=end
// console.log(xorOperation(5,0))
