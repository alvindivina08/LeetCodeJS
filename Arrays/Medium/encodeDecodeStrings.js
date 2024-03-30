/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let result = ''

    for (const str of strs){
        result += str.length.toString() + ':/' + str
    }
    console.log(result);
    return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let i = 0;
    const result = [];
    while (i < s.length) {
        let delim = s.indexOf(':/', i);
        let length = parseInt(s.substring(i, delim));
        result.push(s.substring(delim + 2, delim + 2 + length))
        i = delim + 2 + length;
    }
    return result;
};

const test = [
    ["Hello","World"],
    ["Hi", "Hello", "Hey", "Supercalifragilisticexpialidocious"]
];


test.forEach((value) => {
    const answer = decode(encode(value));
    console.log(answer)
})
