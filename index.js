// const fruits = ['apple', 'orange', 'grapes'];
// fruits[3] = 'Mango';
// fruits.push('Grapes'); //add element in last of array
// fruits.unshift('papaya');// add element in the beginning of array
// fruits.pop()
// console.log(Array.isArray('okok'));
// console.log(fruits.indexOf('papaya'));
// console.log(fruits);

const person = {
    firstName:'suraj',
    lastName:'saroj',
    age:30,
    hobbies:['music', 'movie', 'coding'],
    address:{
        street: '001',
        city: 'Mumbai',
        state:'Maharashtra'
    }
}

// console.log(person.hobbies[1]);
// console.log(person.address.state);
// console.log(person.age)
const {firstName,lastName,age,hobbies,address:{street,city,state}} = person;
// console.log(age)
console.log(street)





// console.log(person)
// console.log(person.hobbies[1])
// const JsonObj = JSON.stringify(person);
// console.log(JsonObj)