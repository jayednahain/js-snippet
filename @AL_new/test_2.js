// async function dataShow(){
//     console.log("Async function");
//     return P

// }

// dataShow()
// new Promise(resolve,reject){
//     try{
//         const data = "hellow";
//         resolve(data)
//     }
//     catch{e}
//     reject(new Error(e))
// };


function flatlandSpaceStations(n, c) {
    console.log("number   citites : "+n)
    console.log("number of space station: "+c);
    let result;
    for (let i = 0; i<=n;i++){
        // console.log(i);
        result = i-c;
        console.log(result);
    }
}
flatlandSpaceStations(10,1)