/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

const luoma = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length -1; i++) {
        const value = luoma[s[i]] || 0;
        const next = luoma[s[i+1]] || 0;
        if(next > value){
            sum -= value;
        }else{
            sum += value
        }
    }
    sum += luoma[s[s.length-1]];
    return sum;
};
// @lc code=end
