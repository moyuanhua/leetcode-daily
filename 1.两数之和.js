/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        map.set(value,i)
    }
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const complement = target - value;
        if(map.has(complement)){
            return [i, map.get(complement)];
        }
    }
};
// @lc code=end

