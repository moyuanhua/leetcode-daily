/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */



// @lc code=start

// 记忆法
var dp = {};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    dp = {}
    const res =  maxlength(nums,nums.length-1)
    console.log(dp)
    return res;
};

var maxlength = function(nums,i){
    console.log(i)
    if(dp[i] !== undefined) return dp[i];
    let a = 0;
    for(let j=0;j<i;j++){
        if(nums[j] < nums[i]){
            a = Math.max(a,(maxlength(nums,j) + 1));
        }
    }
    // console.log(i,a)
    dp[i] = a;
    return dp[i];
}
// @lc code=end

lengthOfLIS([1,3,6,7,9,4,10,5,6])