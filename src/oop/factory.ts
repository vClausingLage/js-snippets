// Factory function
function createPerson(type: string) {
    if (type === 'student') {
        return new Student();
    } else if (type === 'teacher') {
        return new Teacher();
    } else {
        throw new Error('Invalid type');
    }
}

// Example classes
class Student {
    constructor() {
        console.log('Student created');
    }
}

class Teacher {
    constructor() {
        console.log('Teacher created');
    }
}

// Usage
const student = createPerson('student'); // Student created
const teacher = createPerson('teacher'); // Teacher created
