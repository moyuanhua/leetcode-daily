/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    // 滑动窗口
    // 优化方案
    // 比如 t =3； 
    // 我们的窗口在0 - 3 没有找到 
    // 那么窗口就变成了 1, 4 那么 1，2，3之间的大小不需要再判断了 因为再0，3已经存在了 
    // 只需要判断新加入的元素 也就是4和其它所有的大小即可
    // 也就是只要i =0 这个过去之后 以后我们只要判断新加入的元素

    for (let i = 0; i < nums.length; i++) {
        let end = i + k;
        let temp = i;
        if (i === 0) {
            temp = i + 1;
        } else {
            temp = end - 1;
        }
        console.log(k, end, temp)
        while (temp <= end && temp < nums.length) {
            // 这里的值都是满足 abs(i -k) <= k;
            if (Math.abs(nums[i] - nums[temp]) <= t) {
                return true;
            }
            temp++;
        }
    }
    return false;
};
// @lc code=end
console.log(containsNearbyAlmostDuplicate([1, 2, 2, 3, 4, 5], 3, 0))
