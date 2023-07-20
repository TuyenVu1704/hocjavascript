//  Khac nhau giua var / let, const

// Khai bao

var a = 5;
a = 7;
console.log(a); // a = 7

let b = 5;
b = 7;
console.log(b); // b = 7

const c = 8;

console.log(c); //app.js:14 Uncaught TypeError: Assignment to constant variable.

//Template literal
// arrow funtion khong cho chuc  nang context

const sum = (a, b) => a + b;
console.log(sum(2, 4)); // 6

const obj = (a, b) => ({ name: a, price: b });
console.log(obj("abc", 1000)); // {name: 'abc', price: 1000}

// Classes
//

class khoahoc {
    constructor(name, price) {
        (this.name = name), (this.price = price);
    }
    getName() {
        return this.name;
    }
}

const phpKhoahoc = new khoahoc("PHP", 1000);

console.log(phpKhoahoc); //khoahoc {name: 'PHP', price: 1000}

console.log(phpKhoahoc.getName);
