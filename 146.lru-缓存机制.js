/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start


class DLinkNode {
    constructor(key,value){
        this.key = key;
        this.val = value;
        this.prev = null;
        this.next = null;
    }
   
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    // this.cache = [];
    this.head = new DLinkNode();
    this.tail = new DLinkNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.cap = capacity;
    this.size = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   let node = this.map.get(key);
   if(node){
       this.moveToHead(node)
       return node.val
   }
   return -1;
};


/**
 *@param {DLinkNode} node 
 */
LRUCache.prototype.addToHead = function(node){
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

/**
 *@param {DLinkNode} node 
 */
LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/**
 *@returns {DLinkNode} node 
 */
LRUCache.prototype.removeTail = function(){
    let node = this.tail.prev;
    this.removeNode(node)
    return node;
}

/**
 *@returns {DLinkNode} node 
 */
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
}
    

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if(this.cache.length > 
    let node = this.map.get(key);
    if(node == null){
        // 如果key不存在
        let new_node = new DLinkNode(key,value);
        this.map.set(key,new_node)
        this.addToHead(new_node)
        this.size++;
        if(this.size > this.cap){
            let tail = this.removeTail();
            this.map.delete(tail.key)
            this.size--;
        }
    }else{
        node.val = value;
        this.moveToHead(node)
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

