/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr  = new Array(encoded.length + 1);
    arr[0] = first;
    for (let i = 0; i < encoded.length; i++) {
        arr[i + 1] = arr[i] ^ encoded[i];
    }
    return arr;
};
// @lc code=end

