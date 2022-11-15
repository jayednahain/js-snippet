const [...mainMenu]=data.mainMenu
console.log(mainMenu)

//swaping variables
const testData = [1,2,3,4,5]
let [a,b] = testData;
[a,b]=[b,a]

//find data from object by its own method
const data = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order_function: function(categoriesIndex,starterIndex,mainIndex){
        this.categories.map((index,value)=>{
            console.log("category:-"+index+":"+value+"|")
        });
        return[
            this.categories[categoriesIndex],
            this.starterMenu[starterIndex],
            this.mainMenu[mainIndex]
        ]
    }
};

console.log(data.order_function(1,2,2))

// search data in object with a funcion 
// function that define in same object
// and distructe the function into variables
const data = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order_function: function(categoriesIndex,starterIndex,mainIndex){
        this.categories.map((index,value)=>{
            console.log("category:-"+index+":"+value+"|")
        });
        return[
            this.categories[categoriesIndex],
            this.starterMenu[starterIndex],
            this.mainMenu[mainIndex]
        ]
    }
};

// console.log(data.order_function(1,2,2))
// dis- structure function
const [categories,starterMenu,mainMenu]=data.order_function(1,2,2)
console.log(categories,starterMenu,mainMenu)