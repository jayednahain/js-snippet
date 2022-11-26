- a function takes a string and return a string
- it will remove spaces from string and convert it into lowercase

what is callback
- functions that we do not call them by our self, we telling javaScript to calling them later

why callback!
- easy to split out code
-  for more reuseable
-  allow us to create abstraction

abstraction mean
- hide code implementation
- the time we do not care about the detail
- helps us to think about problem from more higher label
```js

//lower label functions
const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}

// lower label functions
const upperFristWord = function(str){
    const [firstWord,...others] = str.split(' ');
    return [firstWord.toUpperCase(),...others].join(' ')
}

// higher label functions
const transfrom = function(str,passFunction){
    console.log('original string: '+str)
    console.log('new String: '+passFunction(str))
    console.log('transform by:'+passFunction.name)

}
//passing call back function!
transfrom("my name is jayed nahian", upperFristWord)
console.log('-------------------------------')
transfrom("the NAME is JAYed NAHIAN",oneWord)
```
  