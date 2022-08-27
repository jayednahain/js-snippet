function Person(name,age){
    let person = {}

    person.name = name
    person.age = age
    person.eat = function(){
        console.log("he is eating")
    }
    
    person.sleeping= function(){
        console.log("he is sleeping")
    }
    console.log(person)

    return person

}

// creating object of the function
const person_one = Person("sakib",34)
console.log(person_one.name)
person_one.eat()
const person_two = Person("tamim",32)
// function --> object
// in large application it will affect for creating many objects
// for that perpouse we could seperate the common methods in object
// here its like eat() sleep()