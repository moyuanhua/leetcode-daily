/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var TrieNOde = function () {
    this.children = {};

}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (!word) {
        return;
    }
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (!node[ch]) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if (!word) {
        return false;
    }
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node.isWord || false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (!prefix) {
        return;
    }
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        const ch = prefix[i];
        if (!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

