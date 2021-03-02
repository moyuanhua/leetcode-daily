/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    if(nums.length === 0){
        return ;
    }
    this.prev_count = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const value = nums[i];
        this.prev_count.push(this.prev_count[i -1 ] + value)
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0){
        return this.prev_count[j]
    }
    return this.prev_count[j] - this.prev_count[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

