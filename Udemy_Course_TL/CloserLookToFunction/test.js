// var n = 10
// function change(n){
//     n = n+100
//     console.log(n)
// }

// change(n)
// console.log(n)

// var testObj ={
//     a:10,
//     b:30
// }

// function changeObject(passObj){
//     testObj.a = testObj.a+100,
//     testObj.b = testObj.b+100 
//     console.log(passObj)
// }
// changeObject(testObj)
// console.log(testObj)


//first- class function
// const add = (a,b) => a+b
// console.log(add(1,2))

// const addObject = {
//     value:80,
//     increment: function(){
//         this.value = this.value+10
//         console.log(this.value)
//     }
// }
// console.log(addObject.increment())


// //Higher-order function

// const greet = () => console.log("Hey Jons");

//131
//
// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }

// const upperFristWord = function(str){
//     const [firstWord,...others] = str.split(' ');
//     return [firstWord.toUpperCase(),...others].join(' ')
// }

// const transfrom = function(str,passFunction){
//     console.log('original string: '+str)
//     console.log('new String: '+passFunction(str))
//     console.log('transform by:'+passFunction.name)

// }
// //passing call back function!
// transfrom("my name is jayed nahian", upperFristWord)
// console.log('-------------------------------')
// transfrom("the NAME is JAYed NAHIAN",oneWord)

const greet = function(valOne){
    return function(valuTwo){
        console.log(`out side function perms ${valOne} | return function perms ${valuTwo} `)
    
    }
}

const bodyOne = greet("1st perms")
// if we only call bodyOne it will valTwo as undefine 
// bodyOne("2nd perms")

// greet("presone_one")("person_two");

// greet function using arrow function
const greet2 = (valOne)=>{
    return (valuTwo)=>{
        console.log(`out side function perms ${valOne} | return function perms ${valuTwo} `)
    
    }
}

// greet2("presone_one")("person_two");
// adding on arrow function

const greeArr = permsOne =>
permsTwo => permsOne+permsTwo

// greeArr("1")("hi")
console.log(greeArr()())

