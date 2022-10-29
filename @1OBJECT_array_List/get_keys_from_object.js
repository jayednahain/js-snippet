  // get object keys
  const objectKeys= Reflect.ownKeys(data)
  console.log(objectKeys)

  var keyList =[];
  for (var i in data){
    keyList.push(i);
  }
  console.log(keyList)
  
//-----------
//get a specific list from Object
const [...mainMenu]=data.mainMenu
console.log(mainMenu)

//swaping variables
const testData = [1,2,3,4,5]
let [a,b] = testData;
[a,b]=[b,a]