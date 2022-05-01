// this using global scope
this.table = 'Window Table'
this.garage = {
    table:'Garage Table'
}
// console.log(this.table)
// console.log(this.garage.table)

//this inside object
let surajRoom = {
    table:'Surajs Table'
}
// console.log(this.surajRoom.table) //wrong cuz its a private object
// console.log(surajRoom.table) //it is the correct way

//this inside method
let surajRoom2 = {
    table:'Suraj2s Table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}

// surajRoom2.cleanTable()

//this inside function
let cleanTable = function(){
    console.log(`cleaning ${this.table}`)
}
// cleanTable.call(this) //cleaning Window Table ->since cleanTable function can't directly access this.table we used call() and put this inside it
// similarly we can also call other members also
// cleanTable.call(this.garage) //-> cleaning Garage Table
// cleanTable.call(surajRoom) //-> cleaning Surajs Table

//this inside inner function

let cleanTable2 = function(soap){
    let innerFunction = (_soap)=>{ //instead of using normal function we used arrow function beacuse its a special function which can look into its outer scope or lexical scope otherwise a normal function will give undefined values
        console.log(`cleaning ${this.table} using ${_soap}`)
    }
    innerFunction(soap)
}
// cleanTable2.call(this,'lux')


//this inside constructor

let createConstructor = function(name){
    this.table = `${name} Table`
}

createConstructor.prototype.cleanTable3 = function(soap){
   console.log(`cleaning ${this.table} using ${soap}`)
}

let suraj = new createConstructor('Suraj');
// suraj.cleanTable3('Nirma')

//this inse class
class createClass {
    constructor(name) {
        this.table = `${name} Table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`)
     }
}

let rupesh = new createClass('Rupesh');
rupesh.cleanTable('Dettol')