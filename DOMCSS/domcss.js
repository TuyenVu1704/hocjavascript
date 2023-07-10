var boxElement = document.querySelector(".box");
console.log(boxElement.style);
Object.assign(boxElement.style, {
    width: "200px",
    height: "200px",
    backgroundColor: "red",
    color: "#fff",
});

console.log(boxElement.classList);

boxElement.classList.add("box-2"); // add them class box-2
boxElement.classList.remove("box-2"); // Xoa class box-2
boxElement.classList.contains; // Hien ra class cua element
boxElement.classList.toggle("abc"); // them class neu element chua co, xoa class do neu element co roi
