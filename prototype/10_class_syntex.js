/// old code
// function Person(name,age){
//     //let person = Object.create(Person.prototype)
//     this.name = name
//     this.age = age
//     //console.log(person)
//     //return person
// }

// Person.prototype = {
//     eat(){
//         console.log("he is eating")
//     },
//     sleeping(){
//         console.log("he is sleeping")
//     }

// }
//     const person_one = new Person("sakib",34)
//     console.log(person_one.name)
//     person_one.eat()
//     const person_two =new Person("tamim",32)
//     console.log(person_two.name);
//     person_two.sleeping()


// code using class

class Person{
    constructor(name,age)
    {
        this.name = name,
        this.age = age
    }

    eat(){
        console.log("he is eating");
    }
    sleeping(){
        console.log("he is sleeping")
    }
}

const person_one = new Person("sakib",34)
    console.log(person_one.name)
    person_one.eat()
    const person_two =new Person("tamim",32)
    console.log(person_two.name);
    person_two.sleeping()