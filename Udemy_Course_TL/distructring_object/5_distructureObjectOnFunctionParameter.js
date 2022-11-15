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
    order_function: function(categoriesIndex,starterIndex,mainIndex){
        this.categories.map((index,value)=>{
            console.log("category:-"+index+":"+value+"|")
        });
        return[
            this.categories[categoriesIndex],
            this.starterMenu[starterIndex],
            this.mainMenu[mainIndex]]
    },
    //distructure object object on parameter
    orderDelivary:function({time,address,mainIndex,startIndex}){
        //
        // const {time,address,mainIndex,startIndex}=obj
        console.log(time+":"+address+":"+mainIndex+":"+startIndex);
    }
  };

 dataWithObject.orderDelivary({
    time:"22:90",
    address:"dhaka",
    mainIndex:2,
    startIndex:2
  })
