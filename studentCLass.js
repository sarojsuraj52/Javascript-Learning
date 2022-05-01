class Student{
    static count = 0;
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.count++; //way of accessing static variable className.staticVariableName
    }
    check(){ //normal methods are called using object name
        if(this.marks>40){
            console.log(`${this.name} age ${this.age} is eligible`);
        }  
        else{
            console.log(`${this.name} age ${this.age} is not eligible`);
        }
    }
    
    static countStudent(){//static method can be call directly using class name
        console.log(`Total Students: ${Student.count}`)
    } 

    setPlacementAge(minPlacementAge){
        return (minPlacementMarks) =>{ //if we have used normal function it would give error cuz setPlacementAge can be called using object but not the one which is being return from it. hece we used arrow function which gets called when its parent is called.
            if(this.marks >= minPlacementMarks && this.age >= minPlacementAge) {
                console.log(`${this.name} is Eligible for Placement`)
            }
            else{
                console.log(`${this.name} is not eligible for Placement`)
            }
        }
        
    }
}
let suraj = new Student('suraj', 22,8850912764,50)
let suraj2 = new Student('suraj2', 20,8850912764,70)
let suraj3 = new Student('suraj3', 15,8850912764,30)
let suraj4 = new Student('suraj4', 30,8850912764,80)
let suraj5 = new Student('suraj5', 5,8850912764,10)
suraj.check()
Student.countStudent()
suraj.setPlacementAge(20)(50)
suraj2.setPlacementAge(20)(50)
suraj3.setPlacementAge(20)(50)
suraj4.setPlacementAge(20)(50)
suraj5.setPlacementAge(20)(50)


