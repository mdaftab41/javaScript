// 1. Creating an array of student objects
const students = [
    {
        name: 'Alice',
        age: 20,
        major: 'Computer Science',
        year: 'Sophomore',
        gpa: 3.8,
        // 3. Method to get student info
        getInfo: function() {
            return `${this.name}, Age: ${this.age}, Major: ${this.major}, Year: ${this.year}, GPA: ${this.gpa}`;
        }
    },
    {
        name: 'Bob',
        age: 22,
        major: 'Mathematics',
        year: 'Senior',
        gpa: 3.5,
        getInfo: function() {
            return `${this.name}, Age: ${this.age}, Major: ${this.major}, Year: ${this.year}, GPA: ${this.gpa}`;
        }
    },
    {
        name: 'Charlie',
        age: 23,
        major: 'Physics',
        year: 'Senior',
        gpa: 3.9,
        getInfo: function() {
            return `${this.name}, Age: ${this.age}, Major: ${this.major}, Year: ${this.year}, GPA: ${this.gpa}`;
        }
    },
    {
        name: 'David',
        age: 21,
        major: 'Chemistry',
        year: 'Junior',
        gpa: 3.6,
        getInfo: function() {
            return `${this.name}, Age: ${this.age}, Major: ${this.major}, Year: ${this.year}, GPA: ${this.gpa}`;
        }
    }
];

// 2. Function to display student information
function displayStudents(students) {
    students.forEach((student, index) => {
        console.log(`Student ${index + 1}: ${student.getInfo()}`);
    });
}

// 3. Function to add a new student
function addStudent(name, age, major, year, gpa) {
    const newStudent = {
        name: name,
        age: age,
        major: major,
        year: year,
        gpa: gpa,
        getInfo: function() {
            return `${this.name}, Age: ${this.age}, Major: ${this.major}, Year: ${this.year}, GPA: ${this.gpa}`;
        }
    };
    students.push(newStudent); // Add new student to the array
    displayStudents(students); // Display updated list
}

// 4. Function to update a student's GPA
function updateStudentGPA(name, newGPA) {
    const student = students.find(s => s.name === name);
    if (student) {
        student.gpa = newGPA; // Update GPA
        displayStudents(students); // Display updated list
    } else {
        console.log('Student not found.');
    }
}

// 5. Initial display of students
displayStudents(students);

// 6. Adding a new student and updating an existing student
addStudent('Eva', 24, 'Biology', 'Senior', 3.7);
updateStudentGPA('Alice', 3.9); // Update Alice's GPA
