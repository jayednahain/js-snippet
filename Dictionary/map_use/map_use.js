// Map
/*
> Map as object
map and objects are smiller
but map key can be diffrent data types!
object key must be string data type! 

> map as fucntion
map accpect function as argument!

*/
//Create map
//   const data = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(data);

  // set values on map
  const data_2 = new Map()
  console.log(data_2);
  data_2.set("apples", 500)
  data_2.set("bananas", 300)
  data_2.set("oranges", 100)
console.log(data_2);

  //get value on map suing key 
console.log("get key value: ",data_2.get("apples"));

  // get the total size of the elements
console.log("size: ",data_2.size);

  //delete item from map
data_2.delete("oranges")

  //check any key exesting
  // retrun false we delete that item
console.log(data_2.has("oranges"));

//using functtion inside map
 var array_one = [1,2,3,4,5]

 function squer(x)
 {
    return x*2
 }

const maped_data = array_one.map(squer)
console.log(maped_data);


