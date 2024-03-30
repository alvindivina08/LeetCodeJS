var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

// const nums = [1,1,1,2,2,3,3,3,3]
const nums = [500, 500 ,500, 200, 200, 800, 800, 800, 800, 800, 100]
const k = 2
const result = topKFrequent(nums, k);
console.log(result)
