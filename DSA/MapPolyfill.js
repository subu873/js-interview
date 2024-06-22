//create polyfill for map method
const arr = [2, 3, 4, 5, 6]
let result = arr?.map((k) => {
    return k * 2
})

//Polyfill for Array Map Method
Array.prototype.MyCustomMap = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        // pass key,index,array
        result?.push(cb(this[i], i, this))
    }
    return result
}