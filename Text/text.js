var headingElement = document.querySelector(".head");

console.log(headingElement.innerText);
// Lấy ra nội dung được hiển thị trên web và không lấy khoảng cách hay các tag bên trong
// innerText: là thuộc tính của element Node
console.log(headingElement.textContent);
// Lấy ra toàn bộ các text node bên trong thẻ element, cả khoảng cách và các element node bên trong
// textContent: là thuộc tính của element Node và Text Node

var boxElement = document.querySelector(".box");
console.log(boxElement.innerText);
console.log(boxElement.textContent);

var courses = ["Java", "PHP", "Ruby"];

function getArr(courses) {
    var itemArr = courses.map(function (course) {
        return `<li>${course}</li>`;
    });
    document.querySelector("ul").innerHTML = itemArr.join("");
}

getArr(courses);
