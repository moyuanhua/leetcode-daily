/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b) => a -b);
    let h=0, i = citations.length -1;
    while(citations[i] > h && i >= 0){
        i--;
        h++
    }
    return h;
};
// @lc code=end

