

/////////////////////////////////////////////////////////Explicit binding
//ex 1
var sakib_ob = {
    name:"sakib",
    age :12,
    printPlayerName: function(){
        console.log(this.name)
    }
}

sakib_ob.printPlayerName()

//ex 2
// FUnction to object
var PrintPlayerNameFunction = function(pass_obj){

    // define object property
    // property can access by obj that came from main function
    pass_obj.PrintPlayerName = function(){
        console.log(this.name)
    }
    pass_obj.PrintPlayerAge = function(){
        console.log(this.age)
    }
}

var person_one_obj= {
    name:'Sakib',
    age: 34
}

var person_two_obj = {
    name:'Tamim',
    age: 34
}




PrintPlayerNameFunction(person_one_obj)// passing the object
// for passing this obj we can use the object property
person_one_obj.PrintPlayerName()
person_one_obj.PrintPlayerAge()


console.log("------------------")
PrintPlayerNameFunction(person_two_obj)
person_two_obj.PrintPlayerName()
person_two_obj.PrintPlayerAge()



//ex3
// function to object
var Person = (name,age) =>{
    return{
        name:name,
        age:age,
        show_name: function()
        {
            console.log(this.name)
        },
        show_age: function()
        {
            console.log(this.age)
        }
    }
}

var person_one = Person('sakib',35)
// access object property
person_one.show_name()
person_one.show_age()

var person_two =Person('tamim',83)
person_two.show_name()
person_two.show_age()



// ex 4

var Person = (name,age) =>{
    return{
        name:name,
        age:age,
        show_name: function()
        {
            console.log(this.name)
        },
        show_age: function()
        {
            console.log(this.age)
        },
        ///person pather
        father:{
            name:"MXxxxx",
            age:34,
            father_name: function()
            {
                console.log(this.name)
            },
            father_age: function()
            {
                console.log(this.age)
            }
        }
        


    }
}

var person_one = Person('sakib',35)
// access object property
person_one.show_name()
person_one.show_age()
//father info
// person_one.father.father_name()
// person_one.father.father_age()

console.log("---------------------")

var person_two =Person('tamim',83)
person_two.show_name()
person_two.show_age()






