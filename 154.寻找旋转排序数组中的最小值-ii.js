/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let mid = Math.floor((right + left) / 2);
        // mid < right 的时候 mid - right 是升序 最小值在 left -mid 追安
        // mid > right 的时候 mid -> right 是降序的 最小值在 mid - right 之间
        // mid === right 的时候 right --
        if(nums[mid] < nums[right]){
            right = mid
        }else if(nums[mid] > nums[right]){
            left = mid + 1;
        }else {
            right -- ;
        }
    }
    return nums[left];

};
// @lc code=end
