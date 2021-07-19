/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax  = new Array(height.length);
    leftMax[0] = height[0] 
    for (let i = 1; i < height.length; i++) {
        const h = height[i];
        leftMax[i] = Math.max(leftMax[i -1],h)
    }

    let rightMax = new Array(height.length);
    rightMax[height.length -1] = height[height.length -1];
    for (let i = height.length - 2; i >= 0 ; i--) {
        rightMax[i] =Math.max(rightMax[i+1],height[i])       
    }

    let ans = 0;
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(rightMax[i],leftMax[i]) - height[i]        
    }
    return ans;

};
// @lc code=end

