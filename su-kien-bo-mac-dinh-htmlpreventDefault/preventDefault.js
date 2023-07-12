var aElement = document.links;
for (var i = 0; i < aElement.length; ++i) {
    aElement[i].onclick = function (e) {
        if (!e.target.href.startsWith("https://google.com.vn")) {
            e.preventDefault();
        }
    };
}
