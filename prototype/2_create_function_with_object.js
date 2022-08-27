//define the functin in object

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