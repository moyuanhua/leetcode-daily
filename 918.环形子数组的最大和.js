/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let max = maxSubArray(A);
    let sum = A.reduce()

    return max;
};

var maxSubArray = function(nums) {
    let pre = 0;
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i],nums[i]);
        max = Math.max(max,pre)
    }
    return max;
}

var minSubArray = function(nums) {
    let pre = 0;
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        pre = Math.min(pre + nums[i],nums[i]);
        max = Math.min(max,pre)
    }
    return max;
}
// @lc code=end

maxSubarraySumCircular([5,-3,5])