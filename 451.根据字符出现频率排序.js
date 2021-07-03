/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const frequency = (map.get(char) || 0) + 1;
        map.set(char,frequency);
    }
    const list = [...map.keys()];
    let res = ''
    list.sort((a,b)=>map.get(b) - map.get(a));
    for (let i = 0; i < list.length; i++) {
        const char = list[i];
        let length = map.get(char);
        for (let j = 0; j < length; j++) {
            res += char;
        }
    }
    return res;
};
// @lc code=end

