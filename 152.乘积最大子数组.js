/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let pre = 1;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        // const element = nums[i];
        pre = Math.max(pre * nums[i],pre);
        max = Math.max(pre,max)
    }
    return max;    
};
// @lc code=end

