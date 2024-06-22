//Count all Vowels in a given string
// "elephant" -- 3
// Tree - 2

const CountVowels = (str) => {
    let temp = [];
    for (let char of str) {
        if (["a", "e", "i", "o", "u"]?.includes(char)) {
            temp.push(char)
        }
    }
    let count = temp.length
    return { temp, count }
}