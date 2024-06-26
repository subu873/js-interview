// find all the leaders in arr
// leaders are if all right element are less than current element 
// last element will be always a leader

const arr = [16, 17, 3, 5, 2]
// leaders are [17,5,2]

const getLeaders = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElem = arr[i];
        let rightArr = arr.slice(i + 1);
        let noMaxRight = rightArr?.filter((key) => key > currentElem).length
        if (noMaxRight == 0) {
            result.push(currentElem)
        }
    }
    return result
}

getLeaders(arr)