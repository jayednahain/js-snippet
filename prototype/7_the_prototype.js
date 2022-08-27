/* 

prototype is just a propetry of a function
it just point a object !
every function we make on js has a prototype property
java script inherite property using prototype


last time our code was in two part
we seperated the common mehtod with a new object
here we want to stay in one PART !
*/

function Person(name,age){
    let person = Object.create(Person.prototype)
    person.name = name
    person.age = age
    console.log(person)
    return person
}

Person.prototype = {
    eat(){
        console.log("he is eating")
    },
    sleeping(){
        console.log("he is sleeping")
    }

}
    const person_one = Person("sakib",34)
    console.log(person_one.name)
    person_one.eat()
    const person_two = Person("tamim",32)
