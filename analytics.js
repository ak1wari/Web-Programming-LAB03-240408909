export function calculateClassAverage(students, courseId) {
    let total = 0;
    let count = 0;

    students.forEach(student => {
        student.courses.forEach(course => {
            if (course.courseId === courseId) {
                total += course.grade;
                count++;
            }
        });
    });

    if (count === 0) {
        return 0;
    }

    return total / count;
}

export function findTopStudent(students) {
    return students.reduce((topStudent, student) => {
        if (student.getAverage() > topStudent.getAverage()) {
            return student;
        }

        return topStudent;
    });
}

export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}
