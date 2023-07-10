var h1Element = document.querySelectorAll("h1");
console.log(h1Element);

for (var i = 0; i < h1Element.length; ++i) {
    h1Element[i].onclick = function (e) {
        console.log(e.target.innerText);
    };
}
