/*
Object.craete 
thats create parent child relation
same python abstruction
direct get on object properites to another object


*/
//ex1 outside squle

const captine = {
    name: "marshrafi",
    age: 45,
    country: "Bangladesh"
}
const player = Object.create(captine)
//if we console the direct the player we will se nothing
console.log(player);
// access with the propertry
// access parent property using child
console.log(player.name);
console.log(player.age); 


//sequle example---------------------------------------------------------------------------------------
// now craeting a relation between person_common_method()
    // and person in Person function
    // for that reason
    // we can access person_common_method objects methods
    // from person object direclty with defining on object

    const person_common_method={
        eat(){
            console.log("he is eating")
        },
        sleeping(){
            console.log("he is sleeping")
        }

    }

    function Person(name,age){
        //let person = {}
        let person = Object.create(person_common_method)

        person.name = name
        person.age = age
        //person.eat= person_common_method.eat
        //person.sleeping = person_common_method.sleeping
        
 
        console.log(person)

        return person

    }

        const person_one = Person("sakib",34)
        console.log(person_one.name)
        person_one.eat()
        
        const person_two = Person("tamim",32)



// for this simple pattern we have to maintain another object from outside the object assistance of another object
    // creating a object with the assistance of another object it might create problem
    // for this the prototype has COME
    // go 7 for discover prototype
