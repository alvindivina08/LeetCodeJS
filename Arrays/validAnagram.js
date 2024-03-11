/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (const n of  freq) {
        if (n !== 0) return false;
    }

    return true;

};

const test = [
    ["anagram", "nagaram"],
    ["rat", "car"]
]

test.forEach((value) => {
    const answer = isAnagram(value[0], value[1]);
    console.log(answer)
})