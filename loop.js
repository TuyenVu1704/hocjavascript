// for ...in

var myInfo = {
    name: "Tuyen",
    age: 18,
    address: "Bien Hoa",
};
// // for("một biến" in "đối tưởng hoặc mảng" )
// {
//Khối code
// }

/**
 * Vòng for sẽ chạy có bao nhiêu key thì sẽ chạy bấy nhiêu lần
 * Giá trị của biến sinh ra sẽ là chuỗi
 */
for (var key in myInfo) {
    console.log(myInfo[key]);
}

/**
 * for .... of
 * Muốn lấy ra phần tử của mảng hoặc chuỗi
 * không sử dụng được cho object
 */

var languages = ["Java", "PHP", "ruby"];

for (var value of languages) {
    console.log(value); /**Java
     PHP
     ruby */
    console.log(value);
}

// Sử dụng cho object

var quynh = {
    name: "Quynh",
    age: 18,
};

// Chuyển object về mảng

console.log(Object.keys(quynh)); //2) ['name', 'age']

for (var value of Object.keys(quynh)) {
    console.log(quynh[value]);
}
