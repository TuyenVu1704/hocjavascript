var courseApi = " http://localhost:3000/courses";

function start() {
    getCourse(renderCourse);
}

start();

// Funtions
// Goi API

function getCourse(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourse(courses) {
    var listCourseElement = document.querySelector(".list-course");
    var htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.content}</p>
            </li>
        `;
    });
    listCourseElement.innerHTML = htmls.join("");
}
