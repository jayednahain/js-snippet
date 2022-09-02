// ex 1  implicit bindings
// var sakib = {
//     name: 'sakib',
//     age :35,
//     printName: function(){
//         console.log(this.name);
//     }
// }

// sakib.printName();

// example -2 explicit
// var printPlayerNameFunction = function (obj){    
//         obj.showPlayerName = function(){
//             var name = this.name;
//             console.log(name);
//         }
// }

// var sakib = {
//     name: "sakib",
//     age:30,
// };
// // var sakib ="sakib";

// var tamim = {
//     name:"tamim",
//     age: 45,
// };

// // object ganing a property using this 
// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);
// sakib.showPlayerName()


// example -3.1 explicit -single object
// var Person = function(name,age){
//     return {
//         name:name,
//         age:age,
//         printName: function(){
//             console.log(this.name);
//         }
//     }
// }

// var person_one_obj = Person("sakib",'34');
// person_one_obj.printName();

// var person_two_obj =Person("tamim",'23');
// person_two_obj.printName();



// example -3.2 explicit - nasted object
var Person = function(name,age){
    return {
        name:name,
        age:age,
        printName: function(){
            console.log(this.name);
        },
        parents_info:{
            father_name:{
                name:"XXX",
                age:age,
                printName: function(){
                    console.log(this.name);
                },
        },
        mother_name:{
            name:"ZZZZ",
            age:age,
            printName: function(){
                    console.log(this.name);
                },
            }
        }
    }
}
var person_one_obj = Person("tamim",'23');
person_one_obj.printName();
person_one_obj.parents_info.father_name.printName();
person_one_obj.parents_info.mother_name.printName();


