class Dictionary {
    constructor(wordsArray) {
        const wordMap = wordsArray.reduce((acc, word) => {
            acc[word] = true;

            word.split('').forEach((letter, i) => {
                const start = word.slice(0, i);
                const end = word.slice(i + 1);
                console.log({i, start, end})
                const partialWord = `${start}*${end}`;

                acc[partialWord] = true
            });
            console.log(acc)
            return acc
        }, {})
        this.dict = wordMap;
    }

    isInDict(word) {
        return !!this.dict[word]
    }
}

const test = new Dictionary(['cat', 'car', 'bar'])

console.log(test.isInDict('cat')); // true
console.log(test.isInDict('*at')); // true
console.log(test.isInDict('*a*')); // false
