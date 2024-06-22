const arr = [2, 3, 5, 1]

let result = arr?.reduce((acc, curr) => {
    return acc + curr
}, 0)

Array.prototype.MyCustomReduce = function (callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i], i, this) : this[i]
    }
    return acc
}

// to call MyCustomReduce

arr?.MyCustomReduce((acc, curr) => {
    return acc + curr
}, 0)