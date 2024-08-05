// task 1 //
class Student {
    constructor(firstName, lastName, yearOfBirth, marks, visits, course) {
        this.firstName = firstName
        this.lastName = lastName
        this.yearOfBirth = yearOfBirth
        this.marks = marks
        this.visits = visits
        this.course = course
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    addVisit() {
        this.visits++;
    }

    getAverageMark() {
        return this.marks.reduce((acc, mark) => acc + mark, 0)
    }

    getVisitsCount() {
        return this.visits
    }

    changeCourse(newCourse) {
        this.course = newCourse;
        this.marks = []
        this.visits = 0
    }

    getInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            yearOfBirth: this.yearOfBirth,
        }
    }
}

// task 2 //
class Student {
    constructor(firstName, lastName, yearOfBirth, marks, visits, courses) {
        this.firstName = firstName
        this.lastName = lastName
        this.yearOfBirth = yearOfBirth
        this.marks = marks
        this.visits = visits
        this.courses = courses
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    addVisit() {
        this.visits++;
    }

    getAverageMark() {
        return this.marks.reduce((acc, mark) => acc + mark, 0)
    }

    getVisitsCount() {
        return this.visits
    }

    addCourse(newCourse) {
        this.courses.push(newCourse);
    }

    deleteCourse(courseToDelete) {
        this.courses = this.courses.filter((course) => course !== courseToDelete)
    }

    getInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            yearOfBirth: this.yearOfBirth,
        }
    }
}

// task 3 //
class Group {
    constructor(studentsList = []) {
        this.studentsList = studentsList
    }

    addStudent(student) {
        this.studentsList.push(student)
    }

    deleteStudent(studentToDelete) {
        this.studentsList = this.studentsList.filter((student) => student !== studentToDelete)
    }

    getStudentsSortedByVisits() {
        return this.studentsList.sort((a, b) => a.getVisitsCount() - b.getVisitsCount())
    }

    getStudentsSortedByMarks() {
        return this.studentsList.sort((a, b) => a.getAverageMark() - b.getAverageMark())
    }
}