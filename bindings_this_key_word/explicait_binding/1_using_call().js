// explicit define when a function is out side the object!

// for explicit use js use explicit method .CALL()
/*
.call() 1st take a object, kon object diye amra function ke call korte chacchi!
which is used to write methods for different objects.
It calls the method, taking the owner object as an argument.

*/

var the_function = function(){
    console.log(this.name)
    console.log(this.age)
}

var the_object = {
    name:'sakib al hasan',
    age:23
}
//the object need to use that function to figure out the name
// using this keyword the function could be find out the name from the object

the_function.call(the_object)

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
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