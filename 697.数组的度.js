/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    // 使用桶排序试试 
    // 1. 找到桶排序的最大值与最小值
    if(nums.length === 0){
        return nums;
    }
    let max = nums[0];
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if(value >max){
            max = value;
        }
        if(value < min){
            min = value;
        }
    }
    let len = max - min + 1;
    const sortarr = new Array(len);
    let maxdu_arr = new Set(); // 最大du的数组
    let maxdu_value = 0; // 当前的最大du
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        let index = value - min; // 在桶的位置
        if(sortarr[index]){
            sortarr[index].push(i); // 记录了相同值的每一个下标
        }else{
            sortarr[index] = [i]
        }
        let du = sortarr[index].length
        if(du > maxdu_value){
            maxdu_arr = new Set([index])
            maxdu_value = du;
        }
        if(du === maxdu_value){
            // maxdu_arr.push(index);
            maxdu_arr.add(index);
        }
    }
    maxdu_arr = Array.from(maxdu_arr)
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < maxdu_arr.length; i++) {
        const sort_index = maxdu_arr[i];
        if(sortarr[sort_index].length >= 1){
             const arr = sortarr[sort_index];
             res = Math.min(res,arr[arr.length -1] - arr[0] + 1)
        }else{
            res = Math.min(res,sortarr[sort_index].length)
        }
    }
    return res;

};
// @lc code=end

