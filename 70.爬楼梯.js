/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f = [1,1,2];
    for (let i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
};
// @lc code=end

