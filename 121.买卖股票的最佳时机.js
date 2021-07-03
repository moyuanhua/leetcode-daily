/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minCost = Number.MAX_VALUE;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        const value = prices[i];
        minCost = Math.min(value,minCost);
        max = Math.max(max,value-minCost)
    }
    return max;
};
// @lc code=end

