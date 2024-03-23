var groupAnagrams = function (strs) {
    const group = {}
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (group[key] === undefined){
            group[key] = [str]
        } else {
            group[key].push(str)
        }
    }
    return Object.values(group);
};

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
