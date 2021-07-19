/*
 * @lc app=leetcode.cn id=1846 lang=javascript
 *
 * [1846] 减小和重新排列数组后的最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let n = arr.length;
    arr.sort((a,b)=>a-b)
    // console.log(arr)
    const res = new Array(n).fill(0);
    res[0] =1;
    for (let i = 1; i < n; i++) {
        res[i] = Math.min(res[i-1] + 1,arr[i])
    }
    // console.log(res)
    return res[n-1]
};
// @lc code=end

