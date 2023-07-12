var divElement = document.querySelector(".box");
divElement.onclick = function () {
    console.log("DIV");
};

var btnElement = document.querySelector("button");

btnElement.onclick = function (e) {
    console.log("Click me"); // Khi chưa dùng sự kiện chặn nổi bọt thì sẽ ra : Click me và DIV
    e.stopPropagation(); // SAu khi dùng thì sẽ ra click me
};
