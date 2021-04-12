/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.cur_op = 0;
    this.list = nestedList.map(i => {
        if(Array.isArray(i)){
            return new NestedIterator(i)
        }else{
            return i
        }
    });
    // console.log(this.list)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if(this.cur_op < this.list.length){
        const item =this.list[this.cur_op];
        if(Number.isInteger(item)){
            return true
        }else{
            if(item.hasNext()){
                return true
            }else{
                this.cur_op++
                return this.hasNext()
            }
        }
    }
    return false
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if(this.cur_op < this.list.length){
        const item =this.list[this.cur_op];
        if(Number.isInteger(item)){
            this.cur_op++;
            return item;
        }else{
            if(item.hasNext()){
                return item.next()
            }else{
                this.cur_op ++;
                return this.next()
            }
        }
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

const n = new NestedIterator([[1,1],2,[1,1]])
console.log(n.hasNext())
console.log(n.next())
console.log(n.list)
console.log(n.hasNext())
console.log(n.next())
console.log(n.list)
console.log(n.hasNext())
console.log(n.next())
console.log(n.next())
console.log(n.next())



