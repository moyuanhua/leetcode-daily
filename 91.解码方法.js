/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

var Handler = function (val) {

}

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    // 11106
    // 1 -> A 或者 不做
    // A 1-<A 或者 不做 必须是 11->K
    // AA 1->A 或者 不做 

    if (!s[0] || s[0] === '0') {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    let f = new Array(s.length).fill(0);
    f[0] = 1;
    for (let i = 1; i < s.length; i++) {
        const value = s[i];
        let temp1 = 0;
        let temp2 = 0;
        if (value !== '0') {
            temp1 = f[i - 1];
        }
        if (s[i - 1] !== '0' && Number((s[i - 1] + value)) <= 26) {
            if (i >= 2) {
                temp2 = f[i - 2]
            } else {
                temp2 = 1;
            }
        }
        f[i] = temp1 + temp2;
    }
    console.log(f)
    return f[s.length - 1];
};
// @lc code=end

numDecodings("10011")