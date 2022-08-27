console.log("connected!");

const search_bar = document.querySelector(".search")
const display = document.querySelector(".result")
const notification = document.querySelector(".notification")

// function show_data(){
//     console.log(this.value);
//     display.innerHTML = this.value;
//     //usign setTimeout with normal function
//     // this will return undefine !
//     setTimeout(function(){ 
//         notification.innerHTML=`you have typed ${this.value}`
//     },1000)

// }
// search_bar.addEventListener('keyup',show_data)


// function show_data(){
//     console.log(this.value);
//     display.innerHTML = this.value;
//     var pass_data = this
//     //using pass_data to pass the this obejct data!
//     setTimeout(function(){ 
//         notification.innerHTML=`you have typed ${pass_data.value}`
//     },1000)

// }
// search_bar.addEventListener('keyup',show_data)


// this will not work here!
// search_bar.addEventListener('keyup',()=>{
//     display.innerHTML = this.value
// })


function show_data(){
    console.log(this.value);
    display.innerHTML = this.value;
    // now usign arrow funciton to pass the this object !
    setTimeout(()=>{ 
        notification.innerHTML=`you have typed ${this.value}`
    },1000)

}
search_bar.addEventListener('keyup',show_data)
