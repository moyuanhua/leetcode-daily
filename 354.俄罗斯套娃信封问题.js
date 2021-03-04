/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    // 遇事不决先排序
    envelopes.sort((a,b)=>{
        return a[0] - b[0]
    })
    // console.log(envelopes);
    let res = 1;
    let dp = new Array(envelopes.length).fill(1);
    for (let i = 0; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
                if(envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]){
                    dp[i] = Math.max(dp[i],dp[j] + 1)
                }
        }
        res = Math.max(dp[i],res)
    }
    return res;
};

// /**
//  * 
//  * @param {*} i 
//  * @param {number[][]} arr 
//  */
// var findOneTop = function(i,arr){
//     if(dp[i]){
//         return dp[i]
//     }
//     for (let j = 0; j < arr.length; j++) {
//         const value = arr[j];
//         if(i !== j){
//             if(j)
//         }
//     }
// }

// @lc code=end

