/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
    let leftPointer = 0;
    let rightPointer = s.length-1;

    while(leftPointer < rightPointer) {
        if(s[leftPointer] !== s[rightPointer]) return false;

        leftPointer++
        rightPointer--
    }

    return true;
};

const test = [
    "A man, a plan, a canal: Panama",
    "race a car",
    " "
]

test.forEach((value) => {
    const answer = isPalindrome(value);
    console.log(answer)
})