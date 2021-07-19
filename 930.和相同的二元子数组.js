/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {

    let start = 0;
    let start2   = 0;

    let total = 0;
    let total2 = 0;



    let end = 0;
    let res = 0;
    while(end < nums.length){
        total += nums[end]
        total2 += nums[end]

        while(start < end && total > goal){
            total -= nums[start++]
        }
        while(start2 < end && total2 >= goal){
            total2 -= nums[start2++]
        }
        end++
        res += (start2 - start)
    }   
    return res;

};
// @lc code=end

numSubarraysWithSum([1,0,1,0,1],2 )