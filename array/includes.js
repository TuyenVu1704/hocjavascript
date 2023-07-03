// Includes method
// Kiểu trả về và boolean
// Chỉ có trong string và array

var title = "Học lập trình Web";
console.log(title.includes("lập")); //true

console.log(title.includes("lập", 5)); //false tìm từ vị trí số 5 không thấy

var arr = ["Học", "lập", "trình"];

console.log(arr.includes("Học"));
