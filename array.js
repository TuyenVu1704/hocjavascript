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
