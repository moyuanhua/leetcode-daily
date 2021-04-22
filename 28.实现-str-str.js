/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    let index = 0;
    while (index < haystack.length && index + needle.length <= haystack.length) {
        let needler_index = 0;
        let temp_index = index;
        while (needler_index < needle.length) {
            if (needle[needler_index] !== haystack[temp_index]) {
                break;
            }
            needler_index++;
            temp_index++;
        }
        if (needler_index === needle.length) {
            return index;
        }
        index++;
    }
    return -1;

};
// @lc code=end
console.log(strStr('hello', 'llo'))
