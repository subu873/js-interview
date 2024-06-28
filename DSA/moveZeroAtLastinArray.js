// input : [0,1,0,3,12]
// output: [1,3,12,0,0]

const MoveZero = () => {
    let result = [];
    for (let num of arr) {
        if (num == 0) {
            result[result.length] = num;
        } else {
            if (result.every((k) => k == 0)) {
                result = [num, ...result]
            } else {
                let zeroArrBefore = result.filter((k) => k != 0)
                let zeroArr = result.filter((k) => k == 0)
                result = [...zeroArrBefore, num, ...zeroArr]
            }

        }
        console.log("num", num, result)
    }
    return result;
}

function transformArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] == 0) {
            result.push(arr[i]);
        }
    }

    let zeroLength = arr.length - result.length;
    for (let j = 0; j < zeroLength; j++) {
        result.push(0)
    }

    return result;
}


console.log(transformArray([0, 1, 0, 3, 12]));
console.log(transformArray([0, 1, 0, 3, 12]));
