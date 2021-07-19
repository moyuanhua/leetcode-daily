/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area = min(x,y) * t;
    let x = 0;
    let y = height.length -1;
    let max = 0;
    while(x < y){
        let value = Math.min(height[x],height[y]) * (y - x);
        max = Math.max(value,max);
        if(height[x] < height[y]){
            x++;
        }else{
            y--
        }
    }
    return max;
};
// @lc code=end

