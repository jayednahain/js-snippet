/*
insted of using .call we can use .bind()
which can return instance
using .call() we can calll it directly

Bind() method. With this method, we can bind an object to a common function
 so that the function gives different result when needed.
 In other words, bind() method allows us to easily set which object will be bound 
 by the this keyword when a function or method is invoked.
*/


// explicit binding
// ex 1
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
//ex 2
var geeks = {
    name : "ABC",
}

const namefun =function(){
    console.log(this.name);
}
var printFunc2= namefun.bind(geeks); 
printFunc2();





//implecit binding
// var geeks = {
//     name : "ABC",
//     namefun: function(){
//        console.log(this.name);}
//        }
         
// var printFunc2= geeks.namefun.bind(geeks);
//        //using bind() 
//        // bind() takes the object "geeks" as parameter//
// printFunc2();
