/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// // @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//     const prv = new Array(nums.length + 1).fill(0);
//     prv[0] = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         const value = nums[i];
//         prv[i] = prv[i-1] + value;
//     }
//     // console.log(prv)
//     prv[-1] = 0;
//     const dp  = {
//         '-1': Number.MIN_SAFE_INTEGER
//     }

//     let max = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < nums.length; i++) {
//         let a = Number.MIN_SAFE_INTEGER;
//         for (let j = 0; j <= i; j++) {
//             // const element = i;
//             // a = Math.max(a,prv[i-1] - prv[j-1] + nums[i])
//         //   /
//                 a = Math.max(a,dp[i-1],prv[i-1] - prv[j-1] + nums[i])
//             // }
//         }
//         dp[i] = a;
//         max = Math.max(max,a)
//     }
//     // console.log(dp)
//     return max;
// };


// 1. 最大值在原数组中 
// 2. 最大值在环形数组中 此时的subArray一定包含A[0]和A[A.length-1]

// /**
//  * 贪心  算法啊
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function(nums) {
    let pre = 0;
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i],nums[i]);
        max = Math.max(max,pre)
    }
    return max;
}

// 动态规划 其实是记录每一个i的最大值
// 
var maxSubArray2 = function(nums) {
    let pre = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if(pre >=0){
            nums[i] = pre + nums[i];  
        }
        pre = nums[i]
        max = Math.max(pre,max);
    }
    return max;
}

// 从这两种解法中我们可以看出贪心和动态规划的区别是贪心只关心当前状态 而 动态规划关心每一个i的最大值

// @lc code=end

console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]))