/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n===0){
        return false
    }
    if(n === 1){
        return true;
    }
    if(n % 1 !== 0){
        return false; 
    }
    return isUgly(n / 2) || isUgly(n / 3) || isUgly(n / 5)
};
// @lc code=end

