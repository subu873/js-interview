// array.push() add new element in the end and return length

Array.prototype.CustomPush = function (num) {
    this[this.length] = num;
    return this.length
}

let arr = [2, 34, 5, 6]
arr.CustomPush(5)

// The Array.prototype.pop() method removes the last element from an array and returns that element. 
Array.prototype.CustomPop = function () {
    let last = this[this.length - 1]
    this.length = this.length - 1
    return last

}