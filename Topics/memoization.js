// Understand memoization is JavaScript:
// Memoization is a optimization technique of remembering the results of a function call for the same input.


function sumOfNumbers(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

function memoize(fun) {
    let cache = {}
    return function (num) {
        console.log(cache)
        if (cache[num]) {
            console.log("result from cache")
            return cache[num]
        }
        cache[num] = fun(num)
        console.log("result from function: first time calculation")
        return cache[num]
    }
}

const memoizedSumOfNumbers = memoize(sumOfNumbers);

console.time("memoization")
console.log(memoizedSumOfNumbers(100))
console.timeEnd("memoization")

console.log("-------------!-------------------")

console.time("memoization")
console.log(memoizedSumOfNumbers(100))
console.timeEnd("memoization")

console.log("-------------!-------------------")


console.time("memoization")
console.log(memoizedSumOfNumbers(500))
console.timeEnd("memoization")

console.log("-------------!-------------------")


console.time("memoization")
console.log(memoizedSumOfNumbers(100))
console.timeEnd("memoization")

const Memoize = (callback) => {
    let cache = {};
    return function (...args) {
        console.log("args", args)
        let key = args.join("")
        if (key in cache) {
            console.log("cached called");
            return cache[key]
        } else {
            console.log("new called")
            let result = callback(args)
            cache[key] = result
            return result;
        }
    }

}

const sum = (arr) => {
    return arr?.reduce((acc, curr) => {
        return acc = acc + curr
    }, 0)
}

const memoCall = Memoize(sum)
memoCall(2, 3, 4, 5)