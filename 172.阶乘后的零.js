/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 实际上就是多少对数字的乘积是 10 。。。
    // 0的贡献来源于： 本身有0 或者偶数与5的倍数相乘获得
    // 所以本题转化为有多少个5的因子
    let count = 0;
    while(n>0){
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
};
// @lc code=end

