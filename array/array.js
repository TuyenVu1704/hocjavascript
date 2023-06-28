var user = ["Tuyen", "Quynh", "Sup"];

console.log(user); //"Tuyen", "Quynh", "Sup"
console.log(user[0]); // Lấy phần tử đầu tiên: Tuyen

// Thay đổi giá trị mảng

user[0] = "Thanh"; // Thay giá trị đầu tiên
console.log(user); //['Thanh', 'Quynh', 'Sup']

// Convert mảng qua string
console.log(user.toString()); //Thanh,Quynh,Sup

// join mảng

console.log(user.join("*")); //Thanh*Quynh*Sup

// pop xoá element cuối cùng
// push thêm element cuối cùng
//shift thêm phần tử đầu tiên
//unshift là thêm phần tử cuối cùng

// splice sử dụng để thêm phần tử
user.splice(1, 0, "Bach", "Xuka"); //Số 1 là vị trí cần thêm, số 0 là số phần tử cần xoá
console.log(user); //'Thanh', 'Bach', 'Xuka', 'Quynh', 'Sup'

user.splice(1, 1);
console.log(user); //Thanh', 'Quynh', 'Sup'
// slice sử dụng để xác định vị trí phần tử đầu tiên

user.slice(0);
console.log(user);

// concat: Thêm vào cuối mảng

console.log(user.concat("Them")); //'Thanh', 'Xuka', 'Quynh', 'Sup', 'Them'

var lass = ["lop1", "lớp 2"];
var truong = lass.concat(user);
console.log(truong); //["lop1", "lớp 2", "Thanh", "Xuka", "Quynh", "Sup"];

// Sort
console.log(truong.sort()); //['Quynh', 'Sup', 'Thanh', 'Xuka', 'lop1', 'lớp 2']
//reversing
console.log(truong.reverse()); //['lớp 2', 'lop1', 'Xuka', 'Thanh', 'Sup', 'Quynh']

// Phương thức của array
/**
 * Phương thức : forEach()
 * Dùng để duyệt phần tử của mảng
 * Cách dùng:
 *  Array.forEach(funtion(Tham số 1, Tham số 2){  })
 * Tham số 1 là : từn phần tử của mảng (tuỳ ý đặt tên)
 * Tham số 2 là: index (tuỳ ý đặt tên)
 */

var courses = [
    {
        id: 1,
        name: "Javasrcipt",
        coin: 100,
    },
    {
        id: 2,
        name: "PHP",
        coin: 200,
    },
    {
        id: 3,
        name: "HTML",
        coin: 0,
    },
    {
        id: 4,
        name: "Ruby",
        coin: 0,
    },
    {
        id: 5,
        name: "ReactJS",
        coin: 1000,
    },
];
courses.forEach(function (course, index) {
    console.log(course);
});

/**
 * Phương thức : every()
 * Dùng để kiểm tra tất các phần tử thoả mãn một điều kiện gì đó
 * Giá trị trả về kiểu boolean
 * Cách dùng: Một biến = Array.every(function(Tham số 1, Tham số 2){
 * return       -- Lưu ý: return sẽ lọc từng phần tử, nếu phần tử đầu tiên trả về là true mới tiếp tục kiểm tra phần tử thứ 2, ngược lại là false sẽ dùng vòng lặp
 * })
 * Tham số 1 là : từn phần tử của mảng (tuỳ ý đặt tên)
 * Tham số 2 là: index (tuỳ ý đặt tên)
 */

var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});

console.log(isFree); //false

/**
 * Phương thức : some()
 * Dùng để kiểm tra (chỉ cần 1 phần tử) thoả mãn một điều kiện gì đó
 * Giá trị trả về kiểu boolean
 * Cách dùng: Một biến = Array.some(function(Tham số 1, Tham số 2){
 * return       -- Lưu ý: return sẽ lọc từng phần tử, nếu phần tử đầu tiên trả về là true mới tiếp tục kiểm tra phần tử thứ 2, ngược lại là false sẽ dùng vòng lặp
 * })
 * Tham số 1 là : từn phần tử của mảng (tuỳ ý đặt tên)
 * Tham số 2 là: index (tuỳ ý đặt tên)
 */
var isFree = courses.some(function (course, index) {
    return course.coin === 0;
});

console.log(isFree); //true

/**
 * Phương thức : find()
 * Dùng để tìm kiếm
 * Giá trị trả 1 đối tượng đầu tiên
 * Cách dùng: Một biến = Array.find(function(Tham số 1, Tham số 2){
 * return
 * })
 * Tham số 1 là : từn phần tử của mảng (tuỳ ý đặt tên)
 * Tham số 2 là: index (tuỳ ý đặt tên)
 */

var courseName = courses.find(function (course, index) {
    return course.name === "HTML";
});

console.log(courseName);

/**
 * Phương thức : filter()
 * Dùng để tìm kiếm
 * Giá trị trả về kiểu boolean
 * Cách dùng: Một biến = Array.find(function(Tham số 1, Tham số 2){
 * return
 * })
 * Tham số 1 là : từn phần tử của mảng (tuỳ ý đặt tên)
 * Tham số 2 là: index (tuỳ ý đặt tên)
 */
