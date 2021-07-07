/*
 * @lc app=leetcode.cn id=1711 lang=javascript
 *
 * [1711] 大餐计数
 */

// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    let map = new Map();
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < deliciousness.length; i++) {
        const val = deliciousness[i]
        if(val > maxVal){
            maxVal =val
        }        
    }
    let res = 0;
    let maxSum = maxVal * 2;
    for (let i = 0; i < deliciousness.length; i++) {
        const val = deliciousness[i]
        for (let sum = 1;sum <= maxSum; sum<<=1) {
            let val1 = sum - val;
            if(map.get(val1)){
                res += map.get(val1) 
            }
        }
        map.set(val,(map.get(val) || 0) + 1)
    }
    return res % (Math.pow(10,9) + 7);
};
// @lc code=end

