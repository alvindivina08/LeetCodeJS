/**
 * @param {string} s
 * @return {string}
 * 
 * get signature is a helper function
 * 
 */
var getSignature = function(s) {
    // creates counts array with 26 elements filled with zero
    const count = Array(26).fill(0);

    // for loop the string in s.
    for (const c of s) {
        // increment the element in count array for each letter found in the string
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            // the String.fromCharCode(i + 'a'.charCodeAt(0)) converts the index of the letter where it was found to an actual letter
            // and saved in result map using result.push. count[i].toString() converts the count to a string.
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
        }
    }
    return result.join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const groups = new Map();

    for (const s of strs) {
        const signature = getSignature(s);
        if (!groups.has(signature)) {
            groups.set(signature, []);
        }
        groups.get(signature).push(s);
    }

    groups.forEach(value => result.push(value));

    return result;
};

const strings = ["eat","tea","tan","ate","nat","bat"]
const test1 = [[ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ]];
const result = groupAnagrams(strings);

console.assert(test1.toString(), result.toString());
(test1 === result) ? console.log('passed') : console.log(`failed\nresult:\n${result}\n${test1}`);

// console.log(groupAnagrams(strings));
