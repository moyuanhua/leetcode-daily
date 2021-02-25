/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        const col = A[i];
        for (let j = 0; j <= Math.floor(col.length / 2); j++) {
            // const value = col[j];
            // console.log(j,col.length-j-1);
            if(j>col.length -j - 1){
                break;
            }
            if(j === col.length - j -1){
                col[j] = 1 - col[j];
                continue;
            }
            if(col[j] === col[col.length - j - 1]){
                const val = 1 - col[j];
                col[j] = val;
                col[col.length - j - 1] = val;
            }
        }
    }
    return A;
};
// @lc code=end

