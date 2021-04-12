/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) {
        return nums.length;
    }
    let n = nums.length;
    let fast = 1;
    // 区间[0,slow]中的元素都是排序数组中只出现一次的元素
    let slow = 0;
    while(fast < n){
    // 当前考察的元素nums[fast]和nums[slow]不相等时
      // 说明nums[fast]是需要放入区间[0,slow]中的
      if(nums[slow] != nums[fast]){
          slow++
          nums[slow] = nums[fast]
      }
      fast++;
    }
    return slow+1;
};
// @lc code=end
removeDuplicates([0,0,1,1,1,2,2,3,3,4])
