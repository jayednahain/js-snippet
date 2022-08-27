// object count optimiazation
    // define common object
    // this object contains only common methods
    // which method are usable for bothe method


    const person_common_method={
        eat(){
            console.log("he is eating")
        },
        sleeping(){
            console.log("he is sleeping")
        }

    }

    function Person(name,age){
        let person = {}

        person.name = name
        person.age = age
        // define the common method from common object
        person.eat= person_common_method.eat
        person.sleeping = person_common_method.sleeping
        
 
        console.log(person)

        return person

    }

    // creating object of the function
    const person_one = Person("sakib",34)
    console.log(person_one.name)
    person_one.eat()
    const person_two = Person("tamim",32)

    // problem arrive
    // if we define a method in common object
    // we need to define it again at Person function