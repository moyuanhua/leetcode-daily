/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.temp = new Array(matrix.length + 1).fill(0);
    if(!matrix[0]){
        return;
    }
    this.temp[0] = new Array(matrix[0].length + 1).fill(0);
    // temp[i][j] = value + temp[i-1][j] + temp[i][j-1] - temp[i-1][j-1];
    // this.temp[-1] = new Array(matrix[]0length).
    // this.temp[-1] = new Array(matrix[0].length).fill(0);
    for (let i = 1; i <= matrix.length; i++) {
        let row = matrix[i -1];
        this.temp[i] = new Array(row.length + 1).fill(0);
        // this.temp[i][-1] = 0;
        for (let j = 1; j <= row.length; j++) {
            // const element = row[j];
            const value = row[j-1];
            let left = this.temp[i][j-1];
            let top = this.temp[i-1][j];
            let x = this.temp[i-1][j-1];
            this.temp[i][j] = value + left + top - x;
        }   
    }
    // console.log(this.temp);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    // console.log(this.temp[row2+1][col2+1],this.temp[row2+1][col1], this.temp[row1][col2], this.temp[row1][col1]);
    return this.temp[row2+1][col2+1] - this.temp[row2+1][col1] - this.temp[row1][col2+1] + this.temp[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

let x = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ])
console.log(x.sumRegion(2, 1, 4, 3))
