/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */



// @lc code=start

// 记忆法
// var dp = {};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const   dp = {}
    // 根据动态规划的思想 先确定小问题 再一点一点扩展到大问题
    let Max = 1;
    for (let i = 0; i < nums.length; i++) {
        // const element = nums[i];
        // i 是小问题的边界
         let a = 1;
        for (let j = 0; j < i; j++) {
            // const element = [j];
            if(nums[j] < nums[i]){
                a = Math.max(a,dp[j] + 1)
            }
        }
        dp[i] = a;
        Max = Math.max(a,Max);
    }

    // const res =  maxlength(nums,nums.length-1)
    // console.log(dp)
    return Max;
};

// var maxlength = function(nums,i){
//     if(dp[i] !== undefined) return dp[i];
//     let a = 1;
//     for(let j=0;j < i;++j){
//         if(nums[j] < nums[i]){
//             a = Math.max(a,(maxlength(nums,j) + 1));
//         }else{
//             a = Math.max(a,maxlength(nums,j))
//         }
//     }
//     // console.log(i,a)
//     dp[i] = a;
//     return dp[i];
// }
// @lc code=end

lengthOfLIS([1,3,6,7,9,4,10,5,6])