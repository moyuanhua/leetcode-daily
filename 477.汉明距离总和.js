/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
/**
 * ----------------------------
 * 知识点
 * 1. 汉明距离 考虑的是同一比特位上的值是否不同 不同位1 而不同比特位上是不影响的
 * 2. 多个数的汉明距离其实就是 同一比特位上 0 和 1 的组合 即 n(0) * n(1)
 * 3. 通过 x & 1 可以求的x的的最低位 是0 || 1
 * 4. 最长31位 也就是0到30? 
 * 时间复杂度 O(31 * N)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let ans = 0; n = nums.length;
    for (let i = 0; i < 30; i++) {
        let n1 = 0; // 第i位上1的个数
        for (let j = 0; j < nums.length; j++) {
            n1 += (nums[j] >> i) & 1;
        }
        let n0 = n -  n1; // 第i位上0的个数
        ans += n1 * n0;
    }
    return ans;    
};
// @lc code=end

