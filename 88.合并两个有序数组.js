/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let arr = [];
    let p1 = 0;
    let p2 = 0;
    while(p1 < m && p2 < n){
        if(nums1[p1] < nums2[p2]){
            arr.push(nums1[p1])
            p1++
        }else{
            arr.push(nums2[p2])
            p2++;
        }
    }
    while(p1 < m){
        arr.push(nums1[p1])
        p1++
    }
    while(p2 < n){
        arr.push(nums2[p2])
        p2++
    }

    for (let i = 0; i != m + n; ++i) {
        nums1[i] = arr[i];
    }
    
};
// @lc code=end

merge([1,2,3],3,[2,5,6],3)