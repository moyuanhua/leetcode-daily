/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const len = s.length;
    const dp = new Array(len).fill(len);
    for (let i = 0; i < s.length; i++) {
        let slice_str = s.slice(0,i+1);
        if(isPalindrome(slice_str)){
            dp[i] = 0;
            continue;
        }
        for (let j = 0; j < i; j++) {
            if(isPalindrome(s.slice(j+1,i+1))){
                dp[i] = Math.min(dp[i],dp[j] + 1)
            }            
        }
    
    }
    return dp[len - 1];
};

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

