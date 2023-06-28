/**
 * Làm việc với chuỗi
 * keyword: Javascript string methods
 */

// 1.So sanh chữ được dựa theo vị trí đứng của chúng theo bảng chữ cái a => Z

var a = "bz";
var b = "d";

if (a < b) {
    // true
    console.log(`${a} nhỏ hơn ${b}`);
} else if (a > b) {
    console.log(`${a} lớn hơn ${b}`);
} else {
    console.log(`${a} bằng ${b}`);
}

//so sánh các chuỗi phân biệt chữ hoa chữ thường,Một cách phổ biến để so sánh các chuỗi không phân biệt chữ hoa chữ thường là chuyển đổi cả hai thành cùng một kiểu chữ (chữ hoa hoặc chữ thường) trước khi so sánh chúng.

function doiChu(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

doiChu("B", "b");
console.log(doiChu);

const strPrim = "foo"; // String Nguyên thuỷ
const strPrim2 = String(1); //  String Nguyên thuỷ "1"
const strPrim3 = String(true); //  String Nguyên thuỷ "true"
const strObj = new String(strPrim); // String Object

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

// Các string nguyên thuỷ và các string đối tượng cũng cho các kết quả khác nhau khi sử dụng eval().String Nguyên thủy được chuyển đến eval được coi là mã nguồn; string object được coi như tất cả các đối tượng khác, bằng cách trả về đối tượng.

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

// Chuyển string object về string nguyên thuỷ bằng valueOf

console.log(eval(s2.valueOf())); //Kết quả trả về là 4
// Chuyển đổi số về dạng chuỗi sử dụng toString()

var a = 10;

var b = a.toString();

console.log(typeof b);

// Contructor String

var contructor = new String("cộng");

console.log(contructor);

// contructor.formCharCode("tru");

// Trả về độ dài chuỗi

var a = "cộng hoà xã hội";

console.log(a.length);

// Trả về một phần trích xuất chuỗi slice(position start, positon end)

console.log(a.slice(2, 7)); // giá trị trích xuất là : ng ho
console.log(a.slice(9)); // giá trị trích xuất là : xã hội
console.log(a.slice(-9)); //giá trị trích xuất là : oà xã hội

// substring() giống như slice, chỉ khác là các giá trị bắt đầu và kết thúc nhỏ hơn 0 được xem là 0
//  Nếu bạn bỏ qua tham số thứ hai, substring() sẽ cắt bỏ phần còn lại của chuỗi.
console.log(a.substring(2, 7)); // giá trị trích xuất là : ng ho
console.log(a.substring(-12)); // giá trị trích xuất là :cộng hoà xã hội

// Substr() Sự khác biệt là tham số thứ hai chỉ định độ dài của phần được trích xuất.

// replace("Giá trị ban đầu", "Giá trị thay thế") Thay thế giá trị ban đầu qua giá trị khác
/**
 * Phương thức thay thế () không thay đổi chuỗi mà nó được gọi.
    Phương thức replace() trả về một chuỗi mới.
    Phương thức replace() chỉ thay thế trận đấu đầu tiên
    Nếu bạn muốn thay thế tất cả các kết quả phù hợp
    Phân biệt chữ cái chữ thường
 */
console.log(a.replace("ã", "e"));

// Thay thế chữ hoa chữ thường dùng biểu thức sau:  /Giá trị ban đầu/i

console.log(a.replace(/CỘNG/i, "hihi"));

// Để thay thế các nội dung giống nhau thì sử dụgn biểu thức sau: /Giá trị ban đầu/g,

var b = " Chú chuồn Chuồn bay cao";
console.log(b.replace(/Chuồn/g, "Cào")); // Giá thì sẽ là:Chú Cào Cào bay cao;
console.log(b.replace(/CHUỒN/gi, "Cào")); // Giá thì sẽ là:Chú Cào Cào bay cao;

// Phương thức replaceAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(text.replaceAll("Cats", "Dogs"));
console.log(text.replaceAll("cats", "dogs"));

// Converting to Upper and Lower Case định dạng chữ hoa chữ thường

console.log(b.toUpperCase());

// Nối chữ  concat()

console.log(b.concat("em bé", "ngủ ngon")); //Chú chuồn Chuồn bay caoem béngủ ngon

/**
 *
 * Các phương thức chuỗi đều trả về chuỗi gốc, Javascript sẽ không sửa đổi chuỗi gốc
 * Nói cách khác chuỗi là không thể thay đổi, chỉ được thay thế.
 */

// trim() dùng để cắt các khoảng trống.
// trimStart() chỉ loại bỏ khoảng trắng ở đầu chuỗi
// trimEnd() loại bỏ khoảng trắng ở cuối chuỗi

// padStart(số đệm, "Giá trị đệm");
var c = "5";
console.log(c.padStart(4, "x")); //xxx5
console.log(c.padEnd(4, "x")); //5xxx

// chartAt() trả về giá trị được chỉ định

console.log(b.charAt(2)); // h

// chartCodeAt() trả về ký tự unicode UTF-16 từ 0 =>65535

console.log(b.charCodeAt(2)); //104

// Chuyển đổi string sang array

console.log(b.split(",")); /*[' Chú chuồn Chuồn bay cao']
0: " Chú chuồn Chuồn bay cao"
length: 1
[[Prototype]]: Array(0)
*/
console.log(b.split("")); /**
(24) [' ', 'C', 'h', 'ú', ' ', 'c', 'h', 'u', 'ồ', 'n', ' ', 'C', 'h', 'u', 'ồ', 'n', ' ', 'b', 'a', 'y', ' ', 'c', 'a', 'o'] */

console.log(b.split("|")); /*[' Chú chuồn Chuồn bay cao']
0: " Chú chuồn Chuồn bay cao"
length: 1
[[Prototype]]: Array(0)
*/

/**
 * Tìm kiếm trong string
 *
 */

//indexOf(),lastIndexOf() trả về mục tìm kiếm xuất hiện đầu tiên trong chuỗi nếu giá trị không có sẽ là -1
/**
 * Hai phương thức indexOf() và search() có bằng nhau không?

Họ chấp nhận các đối số (tham số) giống nhau và trả về cùng một giá trị?

Hai phương pháp KHÔNG bằng nhau. Đây là những khác biệt:

Phương thức search() không thể lấy đối số vị trí bắt đầu thứ hai.

Phương thức indexOf() không thể nhận các giá trị tìm kiếm mạnh mẽ (biểu thức chính quy).
 */

console.log(b.indexOf("u")); //trả về 7

// match(): Phương thức match() trả về một mảng chứa kết quả khớp một chuỗi với một chuỗi
//matchAll(): Phương thức matchAll() trả về một iterator chứa kết quả khớp một chuỗi với một chuỗi

// includes(): trả về giá trị true khi có nội dung chữ được chỉ định
// let text = "Hello world, welcome to the universe.";
// text.includes("world");

// let text = "Hello world, welcome to the universe.";
// text.includes("world", 12);

// startWith(), endWith(), trả về kết quả là true nếu được bắt đầu hoặc kết thúc bằng chuỗi đã chỉ định
