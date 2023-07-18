/**
 * Fetch dùng để gọi API từ Backend lên để xử lý
 * Nó sẽ trả về một JSON/XML
 */

var postApi = " https://jsonplaceholder.typicode.com/posts";

fetch(postApi)
    .then(function (posts) {
        return posts.json();
        // Trả về một JSON => Javascript
    })
    .then(function (datas) {
        var htmls = datas.map(function (data) {
            return `
                <li>
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                </li>
            `;
        });
        var html = htmls.join("");
        document.getElementById("comment-box").innerHTML = html;
    });
