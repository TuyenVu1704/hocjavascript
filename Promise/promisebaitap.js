var users = [
    {
        id: 1,
        name: "Tuyen Vu",
    },
    {
        id: 2,
        name: "Son Dang",
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: "Anh Son chua ra Video",
    },
    {
        id: 2,
        user_id: 2,
        content: "Anh vua ra em oi",
    },
];

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        });
        return getUsersByIds(userIds).then(function (users) {
            return {
                users: users,
                comments: comments,
            };
        });
    })

    .then(function (data) {
        var commentBoxElement = document.getElementById("comment-box");
        var html = "";
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBoxElement.innerHTML = html;
    });
