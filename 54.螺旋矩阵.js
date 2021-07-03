/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length){
        return []
    }
    let dir = 'right';
    let arr = [];
    let length = matrix.length * matrix[0].length;
    let row = 0;
    let cul = 0;
    while(arr.length < length){
        switch (dir) {
            case 'right':
                while(cul < matrix[row].length){
                    arr.push(matrix[row][cul])
                    cul++;
                }
                row++;
                dir = 'donw';
                break;
            case 'donw':
                while(row < matrix.length){
                    arr.push(matrix[row][cul])
                    row++;
                }
                cul--;
                dir = 'left';
                break;
            case 'left':
                while(row < matrix.length){
                    arr.push(matrix[row][cul])
                    row++;
                }
                cul--;
                dir = 'left';
                break;
    
        
            default:
                break;
        }
    }
};
// @lc code=end

