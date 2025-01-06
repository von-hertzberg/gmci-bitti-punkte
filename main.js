class AssignmentInfo {
    constructor(name) {

    }
}

class CourseInfo {

    constructor(name) {
        this.name = name;
    }
}

let courses = [
    new CourseInfo("GMCI"),
    new CourseInfo("PROG1"),
    new CourseInfo("PROG2"),
    new CourseInfo("GDS"),
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
        element.className = "course-element";
        element.onclick = ev => {
            selectCourse(course.name);
        };

        courseList.appendChild(element)
    });
}

function dropHandler(ev) {
    console.log(ev)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        [...ev.dataTransfer.items].forEach((item, i) => {
            if(item.kind === 'file') {
                const file = item.getAsFile();
                console.log(file);
                console.log(file.name);
                addSubmission(file.name);
            }
        });
    }
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function addSubmission(filename) {
    const table = document.getElementById("submissions-table");

    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = table.rows.length - 1; // Assignment number
    cell2.textContent = new Date().toLocaleString(); // Current date and time
    cell3.textContent = filename;
}

document.addEventListener("DOMContentLoaded", (ev) => {
    loadCourses();
});