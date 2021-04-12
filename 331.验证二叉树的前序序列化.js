/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

function TreeNode(val){
    this.val = val;
    this.left = null;
    this.rihgt = null;
}

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    // 前序遍历根节点一定是 preorder[0] 根节点的左边节点一定是 preorder[1] 
    // 如果 root 是有效的 preorder[1]  是无效的 

    if(!preorder || !preorder.length){
        return false;
    }
    // if(preorder[0] === '#' && preorder[2] === '#'){ // 只有魔法可以打败魔法
    //     return false;
    // }
    // if(preorder[0] === '#' && preorder[2] && preorder[2] !== '#'){ // 只有魔法可以打败魔法
    //     return false;
    // }
    // if(preorder[0] === '#'){
    //     return true;
    // }
   

    let stack = [1];
    for (let i = 0; i < preorder.length; i++) {
        if(stack.length === 0){
            return false;
        }
        if(stack[stack.length -1] === 0){
            stack.pop();
        }
        const ch = preorder[i];
        if(ch === ','){
            continue;
        }

        if(ch === '#'){
            stack[stack.length -1] -= 1;
            if(stack[stack.length -1] === 0){
                stack.pop();
            }
        }
        if(ch !== '#') {
            while(i<preorder.length && preorder[i] !== ','){
                i++;
            }
            stack[stack.length -1] -= 1;
            if(stack[stack.length -1] === 0){
                stack.pop();
            }
            stack.push(2)
        }
    }
    
    return stack.length === 0;


};

// @lc code=end

isValidSerialization("9,#,92,#,#")