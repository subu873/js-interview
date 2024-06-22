//Filter Polyfill

const arr = [2, 3, 4, 5, 6]
let result = arr?.filter((k) => {
    return k > 2
})

Array.prototype.MyFilter = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        //if callback condition passed then push into array     
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}