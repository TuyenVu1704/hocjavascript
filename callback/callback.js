/**
 * Callback: là hàm được truyền qua đối số
 * khi gọi hàm khác
 *
 * 1. Là Hàm
 * 2. Được truyền qua đối số
 * 3. Được gọi lại trong hàm nhận đối số
 */

function myFunction(param) {
    if (typeof param === "function") {
        param("Học lập trình");
    }
}

function myCallback(value) {
    console.log("Value:", value);
}

myFunction(myCallback); //Value: Học lập trình

// Hiểu về map bằng cách tự tạo hàm

// Tạo contructor map2

Array.prototype.map2 = function (callback) {
    //callback: là function của courses.map2
    var output = [],
        arrLength = this.length;
    for (var i = 0; i < arrLength; ++i) {
        var result = callback(this[i], i); // tham số this[i]: là course, i là: index
        output.push(result);
    }

    return output;
};

var courses = ["Javascript", "PHP", "Ruby"];

var htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});
// tim hieu ham foreach
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        console.log(index);
    }
};

console.log(Array.prototype);

courses.forEach2(function (element, index, array) {
    console.log(element, index, array);
});
