// In a given Array find max and min
//[2,3,5,62,2,42,3,5] 
// Max is 62
//Min number is 2

const FindMax = (arr) => {
    return arr?.sort((a, b) => b - a)[0]
}

const FindMin = (arr) => {
    let sorted = arr?.sort((a, b) => a - b)
    return sorted[0]
}

const FindMinV2 = (arr) => {
    let sorted = arr?.sort((a, b) => b - a)
    return sorted[sorted.length - 1]
}

const FindMinNMax = (arr) => {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return { max, min }
}