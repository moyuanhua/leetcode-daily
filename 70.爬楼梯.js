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
   if(n ===0 || n === 1){
       return 1;
   }
   let pre = 1, cur = 2;
   for (let i = 3; i <= n; i++) {
        let sum = (pre + cur)
        pre = cur;
        cur = sum;
   }
   return cur;
};
// @lc code=end

