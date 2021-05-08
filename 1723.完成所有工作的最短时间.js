/*
 * @lc app=leetcode.cn id=1723 lang=javascript
 *
 * [1723] 完成所有工作的最短时间
 */




function sortQueue(quene=[],start,end,value){
    if(quene.length === 0){
        quene.push(value)
        return;
    }
    if(quene[start] >= value){
        quene.unshift(value)
        return;
    }
    if(quene[end]<= value){
        quene.push(value)
        return;
    }
    let mid = Math.ceil((start + end)/2);
    if(quene[mid] > value){
        sortQueue(quene,0,mid,value)
    }else{
        sortQueue(quene,mid+1,end,value)
    }
}




// @lc code=start
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {

};
// @lc code=end

