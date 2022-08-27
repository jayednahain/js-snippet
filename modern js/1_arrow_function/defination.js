console.log("active");

// this key word

// var obejct_Data = {
//     name: "JavaScript",
//     libraries:[
//         "react",
//         "angular",
//         "view_js"
//     ],
//     show_library_fun: function(){
//         console.log(this.libraries);
//         console.log(this.name);
//         this.libraries.forEach(function(library){
//             console.log(library);
//         })
//     }
// }
// obejct_Data.show_library_fun()


// var obejct_Data = {
//     name: "JavaScript",
//     libraries:[
//         "react",
//         "angular",
//         "view_js"
//     ],
//     show_library_fun: function(){
//         console.log(this.libraries);
//         console.log(this.name);
//         this.libraries.forEach(function(library){
//             //this.name will return undefine
//             //because this "this" is work for only forEach function
//             // cant get the object_data this 
//             console.log(`my name is ${this.name} my libraries are ${library}`);
//         })
//     }
// }
// obejct_Data.show_library_fun()


// var obejct_Data = {
//     name: "JavaScript",
//     libraries:[
//         "react",
//         "angular",
//         "view_js"
//     ],
//     show_library_fun: function(){
//         console.log(this.libraries);
//         console.log(this.name);
//         var pass_this = this
//         // ading pervious this to pass_this
//         // this is not convenient
//         this.libraries.forEach(function(library){
//             console.log(`my name is ${pass_this.name} my libraries are ${library}`);
//         })
//     }
// }
// obejct_Data.show_library_fun()



var obejct_Data = {
    name: "JavaScript",
    libraries:[
        "react",
        "angular",
        "view_js"
    ],
    show_library_fun: function(){
        console.log(this.libraries);
        console.log(this.name);
        //var pass_this = this
        // ading pervious this to pass_this
        // this is not convenient
        // addding arrow function to reduct this problem
        // using arrow function will not create a new this object
        // it will take previous this information
        this.libraries.forEach((library)=>{
            console.log(`my name is ${this.name} my libraries are ${library}`);
        })
    }
}
obejct_Data.show_library_fun()