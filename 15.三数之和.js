/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const result = [];
    if(nums.length < 3) return result;
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break; // nums[i] 的值不能大于 0 如果大于0 后面的数只会比他大
        if(i > 0 && nums[i] === nums[i -1]) continue;
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            const value = nums[left] + nums[right]
            if(value === target){
                result.push([nums[i],nums[left],nums[right]]) // 获取到答案
                left++;
                right--;
                while(left < right && nums[left] === nums[left -1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            }else if(value < target){
                left++
            }else{
                right--
            }
        }
    }
    return result;
};
// @lc code=end

threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])