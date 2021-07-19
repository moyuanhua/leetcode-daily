/*
 * @lc app=leetcode.cn id=1838 lang=javascript
 *
 * [1838] 最高频元素的频数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    // 计数排序
    nums.sort((a,b)=>a-b)
   let total = 0;
   let l=0;
   let res = 1;
  for (let r = 1; r < nums.length; r++) {
    total += (nums[r] - nums[r -1])  *  (r -l)
    if(total > k){
        total -= (nums[r] - nums[l])
        l += 1
    }
    res = Math.max(res,r-l+1)
  }
  return res;


};


// @lc code=end

