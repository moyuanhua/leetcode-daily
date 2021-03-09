/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let ans = 0;
    for (let left = 0; left < n; left++) {
        let minh = Number.MAX_SAFE_INTEGER;
        for (let right = left; right < n; right++) {
            minh = Math.min(minh,heights[right]);
            let area = (right - left + 1) * minh;
            ans = Math.max(ans,area)
        }        
    }
    return ans;
};
// @lc code=end

