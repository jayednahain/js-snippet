// ex 1  implicit bindings
// var sakib = {
//     name: 'sakib',
//     age :35,
//     printName: function(){
//         console.log(this.name);
//     }
// }

// sakib.printName();

var printPlayerNameFunction = function (obj){
    obj.showPlayerName = function(){
        console.log(this.name);
    }
}