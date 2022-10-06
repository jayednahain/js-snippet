//synchronous execute
// function delay3sec(){
//     var startCurrentTime = new Date().getTime();
//     while(startCurrentTime+3000 >= new Date().getTime());
// };
// function delay2sec(){
//     var startCurrentTime = new Date().getTime();
//     while(startCurrentTime+2000 >= new Date().getTime());
// };

// function processOrder(){
//     console.log("processing..... order for customer 1..")
//     delay3sec();
//     console.log("step 1 complete : making");
//     delay3sec();
//     console.log("step 2 complete : packing");
//     delay2sec();
//     console.log("all process complete successfully");  
// }
// console.log("----takeing order from customer 1")
// processOrder();
// console.log("----complete order from customer 1")

//Asynchronous execution using setTimeout 

function processOrder(){
    console.log("processing..... order for customer 1..")
    setTimeout(()=>{console.log("inside process 1")  },3000)
    console.log("step 1 complete : making");
    setTimeout(()=>{ console.log("inside process 2") },3000)
    console.log("step 2 complete : packing");
    console.log("all process complete successfully");  
}
console.log("----takeing order from customer 1")
processOrder();
console.log("----complete order from customer 1")

