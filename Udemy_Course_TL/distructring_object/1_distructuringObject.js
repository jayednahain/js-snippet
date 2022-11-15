 const dataWithObject = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };
// console.log(dataWithObject)

// access with same name
const {name,location,categories,openingHours}=dataWithObject

// access with different name
const {name:ResturentName,
    location:ResturentLocation,
    categories:FoodCategories,
    openingHours:OpeningTime}=dataWithObject
console.log(ResturentLocation)


// set default values if the keys comes up with empty valu
const {name:ResturentName = [] ,
    location:ResturentLocation = [],
    categories:FoodCategories= [],
    openingHours:OpeningTime}=dataWithObject
console.log(ResturentLocation)
