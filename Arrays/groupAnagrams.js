var groupAnagrams = function (strs) {
    const groupedAnagrams = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        console.log(sortedStr);

        if (groupedAnagrams[sortedStr]) {
            groupedAnagrams[sortedStr].push(str);
        } else {
            groupedAnagrams[sortedStr] = [str];
        }
    }

    return Object.values(groupedAnagrams);
};

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
