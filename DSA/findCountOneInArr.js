//Find the element that appears once in an array
//where every other element appears twice

//Input:  arr[] = {2, 3, 5, 4, 5, 3, 4}
// Output: 2 

const findSingleCount = (arr) => {
    let count = arr?.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})

    let formattedArr = Object.keys(count)?.map((k) => {
        return {
            key: k,
            repeat: count[k]
        }
    })

    return formattedArr?.filter((f) => f?.repeat === 1)
}