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
    let premax = nums[0];
    let premin = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // const element = nums[i];
        let mx = premax;
        let mn = premin;
        premax = Math.max(premax * nums[i],nums[i],mn * nums[i]);
        premin = Math.min(premin * nums[i],nums[i],mx * nums[i]);
        max = Math.max(max,premax)
    }
    return max;    
};
// @lc code=end

