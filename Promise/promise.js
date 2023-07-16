// // Call back Hell
// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 1000);
// }, 3000);

// // Promise là gì???
// // Promise là một Object Contructor
// // Tham số resolve: Thành công
// // Tham số reject: Thất bại

// /**
//  * Trạng thái promise:
//  * 1. Pending: Khi chưa truyền xử lý
//  * 2. Fulfilled: Khi xử lý gọi hàm resolve
//  * 3. Rejected: Khi xử lý gọi hàm reject
//  */

// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // Logic
//         // Khi Thành công gọi: resolve()
//         // Khi Thất bại: reject()
//         resolve(
//             // Truyen vao fake call API
//             [
//                 {
//                     id: 1,
//                     name: "JAVASCRIPT",
//                 },
//             ]
//         );
//     }
// );

// promise
//     .then(function (course) {
//         // Khi resolve được gọi
//         console.log(course);
//     })
//     .catch(function () {
//         // Khi reject được gọi
//         console.log("Fail");
//     })
//     .finally(function () {
//         // Khi một trong 2 thằng resolve hoặc reject được gọi
//         console.log("Done");
//     });

// // Chain (Tính chất chuỗi)
// // Promise có thể truyền vào nhiều .Then
// // then sau sẽ nhận được return của Then trước

// promise
//     .then(function () {
//         return new Promise(function (ms) {
//             setTimeout((resolve) => {
//                 console.log(5);
//             }, 5000);
//         });
//     })
//     .then(function (d) {
//         console.log(d);
//         return 2;
//     })
//     .then(function (d) {
//         console.log(d);
//         return 3;
//     })
//     .then(function (d) {
//         console.log(d);
//     });

// Promise.resolve
// Promis.reject
// Promise.all

var promise1 = new Promise(function (result) {
    setTimeout(() => {
        result([1]);
    }, 1000);
});
var promise2 = new Promise(function (result) {
    setTimeout(() => {
        result([2, 3]);
    }, 3000);
});

Promise.all([promise1, promise2]).then(function (a) {
    var a1 = a[0];
    var a2 = a[1];
    console.log(a1.concat(a2));
});
