/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // 动态规划
    if (!nums.length) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0]
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }
    let di = new Array(nums.length).fill(0);
    di[0] = nums[0];
    di[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        // const element = array[i];
        di[i] = Math.max(nums[i] + di[i - 2], di[i - 1])
    }
    return di[nums.length - 1]
};
// @lc code=end

console.log(rob([4, 2, 2, 4]));