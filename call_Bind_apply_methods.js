// var obj = {
//     nums:2
// }

// var callingfn = function(a,b){
//     return this.nums + a + b;
// }

// // call
// console.log('call method')
// console.log(callingfn.call(obj,1,2))

// var arr = [2,3]

// //apply
// console.log('apply method')
// console.log(callingfn.apply(obj,arr))

// //bind
// console.log('bind method')
// var bind = callingfn.bind(obj)
// console.log(bind(3,4))

var student = {
    age: 20
}

var printAge = function(){
    return this.age
}
var bind = printAge.bind(student)
console.log(bind())