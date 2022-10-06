# 1 
- # synchronous execute with blocking behave
- ## Terms:  CallStack and Console

```js
function delay3sec(){
    var startCurrentTime = new Date().getTime();
    while(startCurrentTime+3000 >= new Date().getTime());
};

function delay2sec(){
    var startCurrentTime = new Date().getTime();
    while(startCurrentTime+2000 >= new Date().getTime());
};
function processOrder(){
    console.log("processing..... order for customer 1..")
    delay3sec();
    console.log("step 1 complete : making");
    delay3sec();
    console.log("step 2 complete : packing");
    delay2sec();
    console.log("all process complete successfully");  
}
console.log("----takeing order from customer 1")
processOrder();
console.log("----complete order from customer 1")
 ```
 # according to CallStack (last in first out -LIFO)
 - at first run the _main()_ function
 - then one by one those function will execute
 - first will add on __CallStack__ then will show the execution on __Console__
 - after execution the function will remove automaticlly remove from __CallStack__
 - in synchronous execution every other function will wait until the processOrder() function execution is complete 

#
# - Asynchronous execution
## Terms:  SetTimeOut, WebApi ,EventLoop , CallBack Queue ,
- SetTimeOut : Built in Asynchronous function   
```js 
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
```

- instead of using custom delay function using __setTimeOut__
  -  after step by step execution __setTimeOut__ will execute.
  -  This time the execution will not wait for setTimeout function
- 
