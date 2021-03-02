/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(A) {
    return A[0].map((v,i) =>A.map((a,j) =>a[i]))
};
// @lc code=end

