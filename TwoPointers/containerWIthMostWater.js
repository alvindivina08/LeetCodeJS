/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let area = 0;

    while (l < r) {
        let num = (r - l) * Math.min(height[l], height[r]);
        area = Math.max(area, num);

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return area;
};

const test = [[1,8,6,2,5,4,8,3,7], [1,1]];

test.forEach((value) => {
    const answer = maxArea(value);
    console.log(answer);
})
