/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

var increasingBST = function (root) {
    const arr = [];
    help(root, arr);
    let newroot = new TreeNode(arr[0]);
    let node = newroot;
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i];
        node.right = new TreeNode(value);
        node = node.right;
    }
    return newroot;
    // console.log(arr);
};

var help = function (root, arr = []) {
    if (root.left) {
        help(root.left, arr);
    }
    arr.push(root.val)
    if (root.right) {
        help(root.right, arr)
    }
}
// @lc code=end

