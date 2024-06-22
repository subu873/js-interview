//1.
let x = 5;
{
    let x = 10;
    console.log(x);
}
console.log(x);

// Output 10,5

//2
const obj = { a: 1, b: 2, c: 3 };
const { a, b } = obj;
console.log(a, b);
//output - 1,2

//3
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//Output - [1,2,3,4,5,6]

//4
const ar1 = [1, 2, 3];
const ar2 = [...arr1];
arr2.push(4);
console.log(arr1); // [1,2,3]
console.log(arr2) //[1,2,3,4]

//5

const x1 = 10;
function foo() {
    console.log(x1);
    const x1 = 20;
}
foo(); // Refrenece Error Cant access x before initilization

//6
const a1 = [1, 2, 3];
const b1 = a1;
b1.push(4);
console.log(a1); //[1,2,3,4]
console.log(b1);//[1,2,3,4]

//7
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); //boolean
console.log(typeof [1, 2, 3]); //object
console.log(typeof { name: "John", age: 25 }); //object
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof function () { }); // function


//8
function calculateSum() {
    console.log(result);
    var num1 = 5;
    let num2 = 10;
    const num3 = 15;
    var result = num1 + num2 + num3;
}

calculateSum(); // undefined

//9
let x = 10;
function updateX() {
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

updateX();
//output =  // 20,10

//10
const person = {
    name: "John",
    age: 30,
};

Object.freeze(person);
person.age = 40;
console.log(person.age); // 30 just because of freeze

//11
function foo() {
    let x = 1;
    function bar() {
        let y = 2;
        console.log(x + y);
    }
    bar();
}
foo();
//Output = 3

//12
let x = 10;
function outer() {
    console.log(x);
    if (false) {
        var x = 20;
    }
}

outer();
//output- undefined

//13
const obj = {
    a: 1,
    b: 2,
    c: {
        a: 3,
        b: 4,
    },
};
const {
    a,
    b,
    c: { a: nestedA },
} = obj;

console.log(a, b, nestedA) //1,2,3