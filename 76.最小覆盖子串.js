/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l =0;
    let r = 0;
    let len = Number.MAX_SAFE_INTEGER;
    let size = t.length;
    let map = new Map()
    for (let i = 0; i < t.length; i++) {
        // const element = t[i];
        let value = map.get(t[i]) || 0
        map.set(t[i],value+1);
    }
    while(l < s.length && r < s.length){
        while(r < s.length && size !== 0){
            if(map.has(s[r])){
                // map.set(s[r],map.get(s[r])--)
                let val = map.get(s[r]) 
                if(val !== 0){
                    map.set(s[r],val - 1)
                    size--
                }
            }
            r++;
        }

        while(l < r && !map.has(s[l])){
            // len = Math.min(r - l,len)
            l++
        }
        console.log(r,l)
        len =  Math.min(r - l,len);
        map.set(s[l],1);
        size++;
        l++
    }
    return len;

};
// @lc code=end

minWindow("ADOBECODEBANC","ABC")