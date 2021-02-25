/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let a = 1;
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        let max = item;
        let min = item;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] >= min && nums[j] <= max){
                a = Math.max(a,j-i+1)
                continue;
            }
            if(max<nums[j]){
                max =  nums[j];
            }
            if(min > nums[j]){
                min = nums[j]
            }
            
            if(max - min <= limit){
                a = Math.max(a,j-i+1)
            }else{
                break;
            }
        }
    }
    return a;
};

// @lc code=end

