function Name(string) {
    //    return string.slice(3,8); // Trả về giá trị từ 3 => 8, Các giá trị dưới 0 sẽ không trả về được : Ngoc
    // return string.substring(-1,5); // Giống slice nhưng các giá trị dưới 0 sẽ được coi là 0
    // return string.length; Trả về độ dài fullName là: 13
    // return string.replace('Tuye', 'Xi'); //Thay thế nội dung Tuye => Xin (Lưu ý: chỉ Thay giá Trị đầu tiên)
    // return string.concat(" ", " - "); // dùng để nối 2 nội dung lại với nhau.
}

var fullName = "Vu Ngoc Tuyen";

console.log(Name(fullName));

/** Bài 2
 * Toán tử gán: ++ và --
 * Sử dụng làm hậu tố: number++, hoặc number--
 */

var number = 6;
number++;
console.log(number); // Number = 7

number++;
console.log(number); // number = 8

/**
 * Ví dụ khác
 */
var number2 = 6;
console.log(number2++); // number2 = 6 lúc này number2 được trả về là 'number2 copy'.
console.log(number2); // number2 = 7 lúc này sau khi trả về 'number2 copy' thì được + thêm 1 nên giá trị là 7.
// hậu tố thì tăng giá trị lên 1 và trả về giá trị trước khi tăng
// Tiền tố thì tăng giá trị lên 1 và trả về giá trị sau khi tăng.

/**
 * Bài 3
 *  Toán nối chuỗi. - String operator
 */

var firstName = "Tuyen";
var lastName = "Vu";

console.log(firstName + " " + lastName); // giá trị là Tuyen Vu

//  Ví dụ 2:

var name = "Tuyen";
name += "Anh";

console.log(name); // Gia tri tra ve la TuyenAnh

/**
 * Bài 4:
 * Toán tử so sánh
 * == Bằng
 * != không bằng
 * >
 * <
 * >=
 * <=
 */

var a = 5;
var b = 12;
if (a == b) {
    console.log("điều kiện đúng!");
} else {
    console.log("điều kiện sai!");
}

/**
 * Bài 5:
 * Kiểu dữ liệu boolean
 */

var isSuccess = true;
console.log(isSuccess);

/**
 * Bài 6:
 * Câu lệnh điều kiện
 *
 * 0
 * false
 * '' _ ""
 * undefined
 * NaN
 * null
 *
 * Trong javascript khi được convert qua boolean thì sẽ là false ngoài 6 giá trị trên thì đều true
 */

if (NaN) {
} else {
}

/**
 * Toán tử Logic
 *
 * && - Toán tử And
 * || - Toán tử Or
 * ! - Toán tử Not
 */

var a = 1;
var b = 3;
var c = 4;

if (a > 0 && b > 0) {
    console.log("DIEU KIEN DUNG");
}

/**
 * Kiểu dữ liệu
 * Dữ liệu nguyên thuỷ _ Primitive Data
 * number
 * string
 * boolean
 * undefined
 * Null
 * Symbol
 * Dữ liệu phức tạp - Complex Data
 * Function
 * Object
 */
// number type
var a = 1;
var b = 2;
var c = 1.5;

// string type

var fullName = "tuyen";
var address = "56/8 Dieu Xien";

// boolean type

var isSuccess = true;

// undefined type

var age; //Khong gán giá trị tức là undefined

// Null Type

var isNull = null; // Nghia la khong co gi.

// Symbol Type

var id = Symbol("id"); // unique
var id2 = Symbol("id");

console.log(id === id2); // Ket qua la false

// function type

var myFunction = function () {
    console.log("my function");
};

console.log(myFunction);

// Object types

var myObject = {
    name: "Tuyen",
    age: 20,
    address: "Dong Nai",
    meFunction: function () {},
};

console.log("du lieu cua toi", myObject); //du lieu cua toi {name: 'Tuyen', age: 20, address: 'Dong Nai', meFunction: ƒ}

var myArray = ["java", "php", "asp", "C#"];

console.log(myArray);
/**
 * (4) ['java', 'php', 'asp', 'C#']
0
: 
"java"
1
: 
"php"
2
: 
"asp"
3
: 
"C#"
length
: 
4
 */

// Kiem tra kieu du lieu

console.log(typeof myArray); //object
console.log(typeof age); //undefined

/**
 * Toán tử so sánh
 * ===  So sánh cả value và datatype
 * !==
 */

var a = 1;
var b = 1;
var c = "1";
console.log(a == b); // true

console.log(a == c); //true

console.log(a === c); //false

/**
 * Tham số trong hàm
 *
 */

function writelog() {
    var myString = "";
    for (var param of arguments) {
        myString += `${param} -`;
    }
    console.log(myString);
}

writelog("Log 1", "Log 2", "Log 3", "Log 4");

// Kiểu dữ liệu tham số không giới hạn
// Có tính private

// Return trong hàm

function cong(a, b) {
    return a + b;
}

var result = cong(2, 8);
console.log(result);

/**
 * chuỗi trong java
 */

// Cách tạo chuỗi

var fullName = "Tuyen vu";

var fullName = new String("Tuyen Vu");

//  cách sử dụng backlash (\)

var fullName = "Tuyen Vu la 'Sieu Nhan'";

var gachCheo = "Đây là dấu gạch chéo ngược \\";

//  Xem độ dài chuỗi

console.log(fullName.length);

// Template String ES6

console.log(`Toi la : ${fullName} ${gachCheo}`);
