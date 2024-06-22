// [2,3,45,1]
// [3,4,5,6,23]
// [34,22,3,4,2]
// result will be 3 as "3" is common in all three array

const getCommonNumber = (arr1, arr2, arr3) => {
    return arr1.filter((key) => {
        return arr2?.includes(key) && arr3?.includes(key)
    })
}
