stack learners : https://www.youtube.com/watch?v=DyZwXcSsYtU
- js have two type of data

1. primitive->(e-mutable)->(Pass by value)->(call by value)
    -  Are also known as in-built data types. 
    - DataTypes:  number, boolean, string , undefine , null ,
- a function body never change data value
- if we want update a variable value, which is decalear out side the function . after update the value, out side the function it will remain the initial value
```js
// value update by function
var n = 10
function change(n){
    //
    n = n+100
    console.log(n)
}

change(n)
// while wen sending n to this function , In the memory we are making a clone of n
// original data is not sending to this function
// so the value of this variable, we have used will remain same as initial 
// - this behavior is called pass by value
console.log(n)
```

2. non-primitive->(mutable)->(pass by reference)->(call by reference)->(Object)
    -  The data types that\ are derived from primitive data types 
    -  lots of primitive data types create non-primitive data
```js
var testObj ={
    a:10,
    b:30
}

function changeObject(passObj){
    testObj.a = testObj.a+100,
    testObj.b = testObj.b+100 
    console.log(passObj)
}
changeObject(testObj)
// when pass a object to this function
// those will save on the memory
// we are sending the original object to this function
// it means we are sending memory location to this function 
// or we can say reference code or number 
// so here the object used in every expects , will always carry the updated data
// - for that behavior we can say that, js objects are mutable
//
console.log(testObj)

```





