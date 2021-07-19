/*
 * @lc app=leetcode.cn id=1818 lang=javascript
 *
 * [1818] 绝对差值和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
    const mod = Math.pow(10,9) + 7;
    const n = nums1.length;
    const rec = [...nums1];
    rec.sort((a,b) => a-b)

};
// @lc code=end

