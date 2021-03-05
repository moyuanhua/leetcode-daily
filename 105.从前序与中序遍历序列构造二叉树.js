/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

let map = new Map();
let preindex =0;


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !preorder.length) {
        return null;
    }
    map = new Map();
    preindex = 0;

    for (let i = 0; i < inorder.length; i++) {
        const value = inorder[i];
        map.set(value,i)
    }
    return dfs(preorder,0,preorder.length - 1);
};

var dfs = function(pre,left,right){
    if(left > right ) return null;
    let root =  new TreeNode(pre[preindex++]);
    let in_index = map.get(root.val);
    root.left = dfs(pre,left,in_index-1);
    root.right = dfs(pre,in_index + 1, right);
    return root;
}

// var d

// @lc code=end

