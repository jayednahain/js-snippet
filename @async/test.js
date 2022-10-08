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


// function processOrder(){
//     console.log("processing..... order for customer 1..")
//     setTimeout(()=>{console.log("inside process 1")  },3000)
//     console.log("step 1 complete : making");
//     setTimeout(()=>{ console.log("inside process 2") },3000)
//     console.log("step 2 complete : packing");
//     console.log("all process complete successfully");  
// }
// console.log("----takeing order from customer 1")
// processOrder();
// console.log("----complete order from customer 1")

//promise

const hasMeeting =true;

const metting = new Promise((resolve,reject)=>{

    //if metting == false
    if(!hasMeeting){
        // if there is no meeting then crate a meeting and send it to resolve
        const meetingDetails = {
            name:"Techinal meeting",
            location:"Google meet",
            time :"10:00am"
        }
        resolve(meetingDetails);
    }
    //if there is already a meeting
    //then send it to reject
    else{
        reject(new Error("meeting already scheduled"));
    }

})
// for using promise we need to chain two things 
//.then .catch
metting.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error.message)
})