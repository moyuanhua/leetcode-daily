/*
 * @lc app=leetcode.cn id=1877 lang=javascript
 *
 * [1877] 数组中最大数对和的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let left = 0;
    let right = nums.length - 1;
    let res = 0;
    while(left < right){
        res = Math.max(nums[right] + nums[left],res);
        left++;
        right--;
    }
    return res;
};
// @lc code=end

