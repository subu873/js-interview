// [2,22,3,4,2,3,1]
// Result will be 2-2,3-2,22-1,4-1,1-1 times

const getArrCount = (arr) => {
    return arr?.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
}

const getArrCountV2 = (arr) => {
    let result = {}
    for (let key of arr) {
        result[key] = (result[key] || 0) + 1
    }
    return result
}