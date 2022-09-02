why this key word !
- To help a function to re-use in diffrent context
# -------------------
### 1. implicit binding
### 2. explicit binding
### 3. new binding
### 4 window binding
### -------------------

#
#
# 1. implicit binding

- ### example one
```javaScript
var sakib = {
    name: 'sakib',
    age :35,
    printName: function(){
        console.log(this.name);
    }
}
sakib.printName();
```
> 1 1st find where the function is called
>> 2 is there any dot notation ? when it is called ? yes
>>> dot . notation imidiate left will denote the this !
>>>> is there any name property in this object ? yes
>>>>> then please the value of the propertry !
#
- example two
```js
var printPlayerNameFunction = function (obj){
    obj.showPlayerName = function(){
        console.log(this.name);
    }
}
```
> this function will take a object as perameter . 
>> inside this function there is another function which help to show . 
>>> inside this function we are seeing 
```js
console.log(this.name);
```
> this "this.name" will show the value of "name" a particaular
>> if the object we are passing thought the function have a name property  

```js
var sakib = {
    name: "sakib",
    age:30,
};
var tamim = {
    name:"tamim",
    age: 45,
};
```
> this object will pass though the "printPlayerNameFunction"

```js 
printPlayerNameFunction(sakib);
```
> this will gain the "showPlayerName" function as their own property
>> so Now we can call the property though the object
```js
sakib.showPlayerName()
```
#
# Implecit binding Example two



