/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
 // 只要知道上一行 其实就知道下一行应该是啥
    for (let m = 0; m < matrix.length -1; m++) {
        const col = matrix[m];
        const next = matrix[m + 1];
        if(!next){
            break;
        }
        for (let n = 0; n < col.length -1; n++) {
            // const element = col[n];
            if(col[n] !== next[n + 1]){
                return false;
            }
        }
    }
    return true;
};
// @lc code=end

