/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    const n = A.length;
    let left = 0, lsum = 0, rsum = 0;
    let ans = 0;
    for (let right = 0; right < n; ++right) {
        rsum += 1 - A[right]; // 1 - A[right] 将数组里面的0变成1 求前缀和
        // rsum - lsum <= k 满足条件 即 lsum >= rsum - l
        while (lsum < rsum - K) { // 当对于此时的right left如果不满足该条件的时候 left递增 直到满足为止 
            lsum += 1 - A[left];
            ++left;
        }
        ans = Math.max(ans, right - left + 1); // 求出此时的right对应的可能的最大长度
    }
    return ans;
};

const binarySearch = (p=[],tar) => {
    let low = 0, higt = p.length -1;
    while(low < higt){
        const mid = Math.floor((higt - low)/2) + low;
        if(p[mid] < tar){
            low = mid + 1;
        }else{
            higt = mid;
        }
    }
    return low;
}

// @lc code=end

// 
// 前缀和数组P 