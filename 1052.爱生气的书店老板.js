/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    const len = customers.length;
    let _sum = 0;
    // 不生气的时候顾客总数
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];
        if(grumpy[i] === 0){
            _sum += customer;
        }
    }

    let avalue = 0;
    // 生气的X分钟内 会有多少客户不满意 如果在这里使用秘密技巧 就能把这些客户留住 那么就是找X分钟内的最大值
    for (let i = 0; i < X; i++) {
        if(grumpy[i] === 1){ // 生气
            avalue += customers[i];
        }
    }
    // 
    let maxValue = avalue;

    for (let i = X; i < customers.length; i++) {
        if(grumpy[i] === 1){
            avalue += customers[i]
        }
        if(grumpy[i-X] === 1){
            avalue -= customers[i - X];
        }
        maxValue = Math.max(avalue,maxValue);
    }
    return _sum + maxValue;

};
// @lc code=end

