function findEarliestMonth(arr) {
    let month = 0;
    let change = Number.MAX_SAFE_INTEGER;
    let totalSum = 0;
    let sum = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        totalSum += arr[i];
    }
    
    let avg1 = 0, avg2 = 0;
    
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        avg1 = sum / (i + 1);
        avg2 = totalSum / n;
        
        if (Math.abs(avg1 - avg2) < change) {
            change = Math.abs(avg1 - avg2);
            month = i + 1;
        }
    }
    
    return month;
}

// Main function
const arr = [1, 3, 2, 3];
console.log(findEarliestMonth(arr));
