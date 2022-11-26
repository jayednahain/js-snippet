First class function and higher order function they mean different things 
- First class it just a feature , there are no first class function in practice , all functions are used as values
- there are higher order function in practice

First class Functions
 - are also called first citizen
 - functions are work like value
 - functions just are another type of object

- store a function as a variable properties
    ```js
    const add = (a,b) => a+b
    console.log(add(1,2))

    const addObject = {
        value:80,
        increment: function(){
            this.value = this.value+10
            console.log(this.value)
        }
    }
    console.log(addObject.increment())
    ```
- A function as argument to another function
  - Like pass a function passed as argument to addEventListener() 
- return a function from another function

Higher order function
- a function that receive another function
  - like addEventListener() which receive a function as argument
- a function which return a function