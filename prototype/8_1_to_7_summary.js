/*

MAIN: GOAL ! > 
SHARE THE COMMON MEHTOD INSIDE THE CONSTRUCTOR FUNCTIONS INSTANCE

> how to create a constructor function ?
 in 7 

 //using this function
 function Person(name,age){
    let person = Object.create(Person.prototype)
    person.name = name
    person.age = age
    console.log(person)
    return person
}
// we construct this objects
const person_one = Person("sakib",34)
    console.log(person_one.name)
    person_one.eat()
    const person_two = Person("tamim",32)

// for this reason the Person is called construct function

// in js bydefult every function is a constructor function
// in constructor fucntion that function Start with camale case


> how to add methods on constructor function
Person.prototype = {
    eat(){
        console.log("he is eating")
    },
    sleeping(){
        console.log("he is sleeping")
    }

}

> using object.craete inherite propertry parent to child


*/