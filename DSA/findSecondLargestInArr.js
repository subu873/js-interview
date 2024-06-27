// Find Second Smallest and Second Largest element in array
function getElements(arr) {
    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        small = Math.min(small, arr[i]);
        large = Math.max(large, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < second_small && arr[i] !== small)
            second_small = arr[i];
        if (arr[i] > second_large && arr[i] !== large)
            second_large = arr[i];
    }

    console.log("Second smallest is " + second_small);
    console.log("Second largest is " + second_large);
}

const arr = [1, 2, 4, 6, 7, 5];
getElements(arr);


// Find Max and Min without Sorting 
const FindMaxMin = (arr) => {
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return { max, min }
    console.log("max", { max }, "min", { min })
}

const FindMax = (arr) => {
    let max = -Infinity;
    let min = Infinity;
    let sMax = -Infinity;
    let sMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sMax && arr[i] !== max) {
            sMax = arr[i];
        }
        if (arr[i] < sMin && arr[i] !== min) {
            sMin = arr[i]
        }
    }

    console.log("max", { max }, "min", { min }, "smax", sMax)
}