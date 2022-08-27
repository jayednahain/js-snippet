// function person(name){
//     this.name = name
//     console.log(this.name);
// }
// var object_one = new person("sakib")



// if we use arroy function it will not work
person=(name)=>{
    this.name = name
    console.log(this.name);
}
var object_one = new person("sakib")
// in js every function is a constructor function !
// but erroy function is not a construcotr function! 
// it just a annonimous function!
// arrow function dosnt carry the constructor behaviour!