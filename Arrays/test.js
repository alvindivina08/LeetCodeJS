/**
 * @param {string} s
 * @return {string}
 * 
 * get signature is a helper function
 * 
 */
var getSignature = function(s) {
    let char = new Array(26).fill(0);
    let group = []

    for (const l of s) {
        char[l.charCodeAt(0) - 'a'.charCodeAt(0)] = 1
    }
    
    for (let i = 0; i < char.length; i++) {
        if(char[i]){
           group.push([String.fromCharCode(i + 'a'.charCodeAt(0))])
        }
    }

    return group.join('')
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    let results = []
    for (const str of strs) {
        const signature = getSignature(str);
        if (!map.get(signature)) {
            map.set(signature, [str])
        } else {
            map.get(signature).push(str)
        }
    }
    map.forEach((value) => results.push(value));

    return results;
};

const strings = ["eat","tea","tan","ate","nat","bat"]
const test1 = [[ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ]];
const result = groupAnagrams(strings);
console.log(result);
