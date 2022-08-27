/*
function Person(name,age){
2. this will happen
3. js will create a object manually
    4. let this = Object.create(null)

    this.name = name,
    this.age = age
    console.log(`my name is ${this.name} . and i am ${this.age} years old`)
    5.then it will retrun the this
   6. return this

}

var person_one = new Person("sakib",58)
1. when we use this key word


*/


// using this
function Person(name,age){
    this.name = name,
    this.age = age
    console.log(`my name is ${this.name} . and i am ${this.age} years old`)
}
var person_one = new Person("sakib",58)





// using normal away
var player_profile_fun = function(val_1,val_2){
    console.log(this.name)
    console.log(this.age)
    console.log(`my name is ${this.name} my age is ${this.age} im very ${val_1} and ${val_2} long`);
}
var player_one_object = {
    name:'sakib al hasan',
    age:23
}
// player_profile_fun.call(player_one_object)
//we can pass extra perameter with call
const looking="handsome";
const height = '6 fit';

player_profile_fun.call(player_one_object,looking,height)

