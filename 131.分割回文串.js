/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const path = [];
    backtrack(s,res,path);
    return res;
};

/**
 * 
 * @param {String} s 
 * @param {Array} res 
 * @param {Array} path 
 */
var backtrack = function(s,res,path){
    console.log(s,res,path)
    if(s.length === 0){
        res.push(path);
        return;
    }
    for (let i = 1; i < s.length + 1; i++) {
        const slice_str = s.slice(0,i);
        if(isPalindrome(slice_str)){
            backtrack(s.slice(i),res,[...path,slice_str])
        }
    }
}


/**
 * 
 * @param {String} s 
 * @returns 
 */
var isPalindrome = function(s){
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        if(s[start] !== s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// @lc code=end

