/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    // this.set = new Set()
    this.BASE = 857; 
    // 为什么要是质数呢 比如如果是10的话 对于 2 4 6 8 10 12 14 永远都在对于的位置 有些位置永远用不到哦
    // 而如果是7 则 对应的槽是 2 4 6 1 3 5 则所有的hash都有可能取到对应的值
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    // this.set.add(key)
    const hash = this.hash(key);
    for (const e of this.data[hash]) {
        if(e === key){
            return;
        }
    }
    this.data[hash].push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    // this.set.delete(key)
    if(!this.contains(key)){
        return;
    }
    const hash = this.hash(key);
    const it = this.data[hash];
    for (let i = 0; i < it.length; i++) {
        // const element = it[i];
        if(key === it[i]){
            this.data[hash].splice(i,1);
            return;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const hash = this.hash(key);
    for (const e of this.data[hash]) {
        if(e === key){
            return true;
        }
    }
    return false;
};

MyHashSet.prototype.hash = function(key){
    return key % this.BASE;
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

