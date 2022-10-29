// array dis-structure
/**
array dis-structure
> is e6 feature
> away of unpacking variables from array and set into seperate variables
> 

 */

const data = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // openingHours: {
    //   thu: {
    //     open: 12,
    //     close: 22,
    //   },
    //   fri: {
    //     open: 11,
    //     close: 23,
    //   },
    //   sat: {
    //     open: 0, // Open 24 hours
    //     close: 24,
    //   },
    // },
  };
// console.log(data)

const testData = [1,2,3,4,5]
let [a,b] = testData;
[a,b]=[b,a]
console.log(a,b)