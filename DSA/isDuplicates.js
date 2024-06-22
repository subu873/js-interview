//check a given array has duplicates or return unique arr
// [2,3,45,23,2,3,5]


const IsDuplicatesExist = (arr) => {
    let unique = [...new Set(arr)]
    let isDuplicates = unique.length !== arr.length
    return { unique, isDuplicates }
}

const IsDuplicatesExistV2 = (arr) => {
    // without new set 
    let temp = []; // unique empty arr
    for (let key of arr) {
        if (!temp.includes(key)) {
            temp = [...temp, key]
        }
    }

    let isDuplicates = temp !== arr.length
    return { isDuplicates, temp }
}