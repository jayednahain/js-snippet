// using this, .call ,
// . call execute one by on
// .apply execute list of items
// .bind work like .call but return instance of the function

//ex 1

var person_name = function(){
    console.log(this.name)
}

var person_age = function(){
    console.log(this.age)
}

var person_one_data = {
    name:'sakib al hasan',
    age:23
}

person_name.call(person_one_data)
// decalearing explictely on person_name() function who is "this"

person_age.call(person_one_data)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ex 2
// . call() function takes argument with object !
/// like we want to passs some perameter with the call function
//// person_one_data have some prons and cons

//explicit
var sakib_ob = {
    name:"sakib",
    age :12,
    // define explicit function
    printPlayerName: function(){
        console.log(this.name)
    }
}
sakib_ob.printPlayerName()

var person_name = function(val_1,val_2,val_3){
    console.log(this.name)
    console.log(`my name is ${this.name} and i am ${val_1} , ${val_2} , ${val_3}`)
}

var person_age = function(){
    console.log(this.age)
    
}

var person_one_data = {
    name:'sakib al hasan',
    age:23
}


// extra arguments for call function
let power_one = "Handsome"
let power_two = "All rounder"
let power_three = "best player"

person_name.call(person_one_data,power_one,power_two,power_three)
person_age.call(person_one_data)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ex 3
//explicit
var sakib_ob = {
    name:"sakib",
    age :12,
    // define explicit function
    printPlayerName: function(){
        console.log(this.name)
    }
}
sakib_ob.printPlayerName()
console.log("----------xxxxxxxxxxx----------------------------")

//implecit
var person_name = function(val_1,val_2,val_3){
    console.log(this.name)
    console.log(`my name is ${this.name} and i am ${val_1} , ${val_2} , ${val_3}`)
}

var person_age = function(){
    console.log(this.age)
    
}

var person_one_data = {
    name:'sakib al hasan',
    age:23
}


// extra arguments for call function
let power_one = "Handsome"
let power_two = "All rounder"
let power_three = "best player"

person_name.call(person_one_data,power_one,power_two,power_three)
person_age.call(person_one_data)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ex 4
///using erson_one_data,power_one,power_two,power_three sever 
///peremeter it might creates problem in feature
// so we are using .apply


var sakib_ob = {
    name:"sakib",
    age :12,
    // define explicit function
    printPlayerName: function(){
        console.log(this.name)
    }
}
sakib_ob.printPlayerName()
console.log("----------xxxxxxxxxxx----------------------------")

//implecit
var person_name = function(val_1,val_2,val_3){
    console.log(this.name)
    console.log(`my name is ${this.name} and i am ${val_1} , ${val_2} , ${val_3}`)
}

var person_age = function(){
    console.log(this.age)
    
}

var person_one_data = {
    name:'sakib al hasan',
    age:23
}


// extra arguments for call function
let power_one = "Handsome"
let power_two = "All rounder"
let power_three = "best player"

let all_power = [power_one,power_two,power_three]

///person_name.call(person_one_data,power_one,power_two,power_three)
person_name.apply(person_one_data,all_power)

person_age.call(person_one_data)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ex 5
// insted of using .call we can use .bind()
// which can return instance
// using .call() we can calll it directly
var sakib_ob = {
    name:"sakib",
    age :12,
    // define explicit function
    printPlayerName: function(){
        console.log(this.name)
    }
}
sakib_ob.printPlayerName()
console.log("----------xxxxxxxxxxx----------------------------")

//emplecit
var person_name = function(val_1,val_2,val_3){
    console.log(this.name)
    console.log(`my name is ${this.name} and i am ${val_1} , ${val_2} , ${val_3}`)
}

var person_age = function(){
    console.log(this.age)
    
}

var person_one_data = {
    name:'sakib al hasan',
    age:23
}


// extra arguments for call function
let power_one = "Handsome"
let power_two = "All rounder"
let power_three = "best player"

let all_power = [power_one,power_two,power_three]

///person_name.call(person_one_data,power_one,power_two,power_three)
//person_name.apply(person_one_data,all_power)

person_name_instance = person_name.bind(person_one_data,power_one,power_two,power_three)
person_name_instance()

person_age.call(person_one_data)




