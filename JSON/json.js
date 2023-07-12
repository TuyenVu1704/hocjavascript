// JSON là một định dạng dữ liễu (chuỗi)

var jsonNumber = "1"; // Number
var jsonString = '"abc"'; //string
var jsonBoolean = "true";
var jsonArray = '["Javasript", "PHP"]';
var jsonObject = '{"name":"Tuyen Vu", "age": 18}';

console.log(typeof JSON.parse(jsonNumber));
console.log(JSON.parse(jsonString));
