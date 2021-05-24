/*
 * @lc app=leetcode.cn id=1734 lang=javascript
 *
 * [1734] 解码异或后的排列
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
    const n = encoded.length + 1;

    // 我们就可以得到 perm 数组所有元素的异或和
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total ^= i;
    }

    //// 设 encoded数组长度为 6
    // encoded[1] = perm[1] ^ perm[2]
    // encoded[3] = perm[3] ^ perm[4]
    // encoded[5] = perm[5] ^ perm[6]
    // => p[1] ^ ... p[6] = e[1] ^ e[3] ^ e[5]
    let odd = 0;
    for (let i = 1; i < n - 1; i += 2) {
        odd ^= encoded[i];
    }
    const perm = new Array(n).fill(0);
    // p[0] ^ odd = tatal => p[0] = total ^ odd
    perm[0] = total ^ odd;
    for (let i = 0; i < n - 1; i++) {
        perm[i + 1] = perm[i] ^ encoded[i];
    }
    return perm;

}


// @lc code=end

