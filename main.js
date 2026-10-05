import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
    calculateClassAverage,
    findTopStudent,
    filterStudents
} from "./analytics.js";

fetchStudents((rawData) => {
    console.log("Data received!");
    console.log("");

    const students = rawData.map(student => {
        return new Student(
            student.id,
            student.name,
            student.courses
        );
    });

    console.log("Testing Immutability:");

    console.log("Original ID:", students[0].id);

    console.log("Attempting to change ID to 999...");

    students[0].id = 999;

    console.log(
        `Final ID: ${students[0].id} (Success: ID did not change)`
    );

    console.log("");

    console.log("--- Analytics Report ---");

    const classAverage = calculateClassAverage(students, 101);

    console.log(
        `Class Average for Course 101: ${classAverage.toFixed(2)}`
    );

    const topStudent = findTopStudent(students);

    console.log(
        `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
    );

    const courseStudents = filterStudents(students, student => {
        return student.courses.some(course => course.courseId === 102);
    });

    const names = courseStudents.map(student => student.name);

    console.log(`Students in Course 102: ${names.join(", ")}`);
});
