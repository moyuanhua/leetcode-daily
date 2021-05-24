/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const n = arr.length;
    const xors = new Array(n+1).fill(0);
    for (let i = 0; i < n; i++) {
        xors[i+1] = xors[i] ^ arr[i];
        // x[1] = 0 ^ arr[0]
        // x[2] = x[1] ^ arr[1]        
    }
    const m = queries.length;
    const ans = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1];
    }
    return ans;
};
// @lc code=end

