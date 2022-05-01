// Constructor function
function Student(firstName, lastName, rollNo, sex, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.sex = sex;
    this.dob = new Date(dob);

    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// object
const s1 = new Student('suraj', 'saroj', 32023, 'Male','08-01-2000');
const s2 = new Student('rupesh', 'singh', 32033, 'Male','12-01-1990');

let fullName = s1.dob>s2.dob?console.log(s1.dob):console.log(s2.dob)

console.log(s1.getBirthYear());
console.log(s1.getFullName());

isEligible = (minimum_age_to_be_eligible)=>{
    var month_diff = Date.now() - minimum_age_to_be_eligible.getTime();  
    var age_dt = new Date(month_diff);      
    var year = age_dt.getUTCFullYear();   
    var age = Math.abs(year - 1970);  
    if(age >= 16 ){
        console.log("He is Eligible")
    }
    else {
        console.log('He is not Eligible')
    }
}

isEligible(s1.dob)