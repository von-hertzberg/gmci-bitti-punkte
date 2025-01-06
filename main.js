class CourseInfo {

    constructor(name) {
        this.name = name;
    }
}

let courses = [
    new CourseInfo("GMCI"),
    new CourseInfo("TEST"),
];

function selectCourse(courseName) {
    var course = courses.find(course => course.name == courseName)

    const nameView = document.getElementById("course-name");

    nameView.textContent = course.name;
}

function loadCourses() {
    const courseList = document.getElementById("course-list");

    courseList.replaceChildren();

    courses.forEach(course => {

        var element = document.createElement("div");
        element.textContent = course.name;
        element.onclick = ev => {
            selectCourse(course.name);
        };

        courseList.appendChild(element)
    });
}

document.addEventListener("DOMContentLoaded", (ev) => {
    loadCourses();
});