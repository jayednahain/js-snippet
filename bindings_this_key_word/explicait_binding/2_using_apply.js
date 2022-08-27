//ex 4
///using erson_one_data,power_one,power_two,power_three sever 
///peremeter it might creates problem in feature
// so we are using .apply
/*
The Function.prototype.apply()
method allows you to call a function with a given this value 
and arguments provided as an array.
https://www.javascripttutorial.net/javascript-apply-method/
*/


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