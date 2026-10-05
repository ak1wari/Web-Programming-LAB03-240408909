export class Student {
    constructor(id, name, courses) {
        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true
        });

        this.name = name;
        this.courses = courses;
    }

    addCourse(courseId, grade) {
        this.courses.push({
            courseId: courseId,
            grade: grade
        });
    }

    getAverage() {
        if (this.courses.length === 0) {
            return 0;
        }

        let total = 0;

        this.courses.forEach(course => {
            total += course.grade;
        });

        return total / this.courses.length;
    }
}
