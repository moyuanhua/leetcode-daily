/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */


// @lc code=start

var isCharOrNum = function(char){
    return /[a-z]|\d/.test(char)
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length -1;
    while(start < end){
        let start_char = s[start].toLocaleLowerCase();
        let end_char = s[end].toLocaleLowerCase();

        if(!isCharOrNum(start_char)){
            start++;
        }
        else if(!isCharOrNum(end_char)){
            end--;
        }
        else if(start_char !== end_char){
            return false;
        }else{
            start++
            end--
        }
    }
    return true
};
// @lc code=end

console.log(isPalindrome("ab@a"));
