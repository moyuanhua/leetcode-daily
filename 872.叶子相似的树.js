/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let left1 = [];
    let left2 = [];
    dfs(root1,left1);
    dfs(root2,left2);
    console.log(left1,left2);
    return left1.join(',') === left2.join(',')
};

var dfs = function(root,left=[]){
    if(!root){
        return;
    }
    if(!root.left && !root.right){
        left.push(root.val)
    }
    if(root.left){
        dfs(root.left,left)
    }
    if(root.right)
    {
        dfs(root.right,left)
    }
}

// @lc code=end

