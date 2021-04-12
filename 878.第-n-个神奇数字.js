/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 * 使用二分查找
 * L 是A H的最小公倍数
 * 判断依据 ： f(x) = [res / A] + [res / B] - [res] /L
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
    const MOD = 1e9 + 7;
    const L = a / gcb(a,b) * b; // 最小公倍数
    let lo = 0;
    let hi = 1e15;
    while(lo < hi){
        let mi = lo + Math.trunc((hi -lo)/2); // 随便取一个中位数
        if(Math.trunc(mi/a) + Math.trunc(mi/b) - Math.trunc(mi / L) < n){ // 中位数求的值
            lo = mi + 1;
        } else{
            hi = mi;
        }
    }
    return lo % MOD;
};

var gcb = function(x,y) {
    if(x === 0) return y;
    return gcb(y%x,x)
}
// @lc code=end

