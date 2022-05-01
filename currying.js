//currying using bind
var sum = function (x, y) {
    console.log(x + y)
}

// var sum2 = sum.bind(this,2,2);
// sum2() 

// var sum2 = sum.bind(this,2,);
// sum2(2)

var sum2 = sum.bind();
sum2(2,2)


// currying using closure
var parentfn = function (x) {
    return function subfn(y) {
        console.log(x * y)
    }
}

var duplicate = parentfn(2);
duplicate(2)

// parentfn(2)(3)
