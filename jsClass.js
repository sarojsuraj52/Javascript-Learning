class Student {
    constructor(firstName, lastName, rollNo, sex, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.sex = sex;
        this.dob = new Date(dob);
    }
        getBirthYear(){
            return this.dob.getFullYear();
        };

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        };
    }


// object
const s1 = new Student('suraj', 'saroj', 32023, 'Male','08-01-2000');
const s2 = new Student('rupesh', 'singh', 32033, 'Male','12-01-1990');

let fullName = s1.dob>s2.dob?console.log(s1.dob):console.log(s2.dob)

console.log(s1.getBirthYear());
console.log(s1.getFullName());