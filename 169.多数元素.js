/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 解法1
    // let count = {};
    // let half = Math.floor(nums.length / 2)
    // for (let i = 0; i < nums.length; i++) {
    //     const value = nums[i];
    //     if (count[value] !== undefined) {
    //         count[value]++;
    //     } else {
    //         count[value] = 1;
    //     }
    //     if (count[value] > half) {
    //         return value
    //     }
    // }
    // return nums[0];

    // 解法二 摩尔投票法。。。 抵消算法
    let count = 1;
    let now = nums[0];
    for (let i = 1; i < nums.length; i++) {
        console.log(count)
        const value = nums[i];
        if (count === 0) {
            count++;
            now = value;
            continue;
        }
        value === now ? count++ : count--;
    }
    return now;
};


// @lc code=end
console.log(majorityElement([10, 9, 9, 9, 10]));
