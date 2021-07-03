/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
// 
// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length -1;
    if(row<0){
        return false;
    }
    let col = 0;
  
    while(col < matrix[0].length && row >= 0){
        let value = matrix[row][col]
        if(value === target){
            return true;
        }else if(value < target){
            col++;
        }else if(value > target){
            row--
        }
    }
    return false;
};
// @lc code=end
console.log(searchMatrix([[-5]],-5))
