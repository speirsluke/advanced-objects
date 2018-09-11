const teaBagsLeft = teaBags => {
  // function receives an object where keys are names of tea types
  // and values are the number of teaBags we have of that type.

  // return the total number teabags we have left
  return Object.values(teaBags).reduce((a,b) => a+b);
}

const shoppingList = (previousShoppingList, newShoppingList) => {
  // function receives two shopping list objects
  // a shopping list has items names as keys and the number of items required as values

  // return a new shopping list which has properties from both shopping lists
  // properties from newShoppingList should overwrite properties from previousShoppingList
  // previousShoppingList and newShoppingList should not be mutated

return Object.assign({}, previousShoppingList, newShoppingList);
}

const footballResults = (results) => {
  // function receives an object called results
  // results has football team names as keys and their number of points as values
  // {
  //   arsenal: 7,
  //   tottenham: 3,
  //   chelsea: 2
  // }

  // return an array of strings containing the results,
  // which follows the format '<teamname> has <points> points'
  // for above input it would be

  // [
  //   'arsenal has 7 points',
  //   'tottenham has 3 points',
  //   'chelsea has 2 points'
  // ]

  const keys = Object.keys(results);

  return keys.map(function(key) {
    return `${key} has ${results[key]} points`;
  });

}

const convertBookArrayToMap = books => {
  // the function receives an array of books where each book has an id, author, title and year

  // for example
  // {
  //   id:1,
  //   author: "Alexander Dumas",
  //   title: "The count of Monte Christo",
  //   year: 1884
  // }

  // convert the array of books into a map, where each key is a book id and the corresponding value
  // is the object with that id from the array

  // for example
  // {
  //   1: {
  //     id:1,
  //     author: "Alexander Dumas",
  //     title: "The count of Monte Christo",
  //     year: 1884
  //   }
  // }

  // hint: create a new output object and assign new properties with id as key and the book as value
let bookMap = {}; 

const bookIds = books.map(function(book){ 
  bookMap[book.id] = book;
})



  return bookMap; 
}

const dogCount = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }

  // return an object which has locations as keys and
  // the number of dogs at that location as values

  // hint: create a new output object and loop over dogs array.
  // For each dog increment the value corresponding to the location key.
  const dogLocations = {};
  const locations = dogs.map(function(dog) {
    dogLocations[dog.location] = 0
    return dog.location; 
  })
console.log(locations)

locations.map(function(location){
  dogLocations[location] += 1;
})
return dogLocations; 
}


const dogNames = dogs => {
  // function receives an array of dogs, each dog has a name and location
  // for example
  // {
  //     name: 'ruby',
  //     location: 'liverpool'
  // }
    // return an object which has locations as keys and
  // as values an array which contains the names of the dogs
  // at that location
  const dogLocations = {};
  dogs.forEach(function(dog) {
    if (!dogLocations[dog.location]) {
      console.log(dog.location);
      dogLocations[dog.location] = [dog.name];
      //dogLocations[dog.location].push(dog.name);    
    }
    else {
       dogLocations[dog.location].push(dog.name);
    }
  })

return dogLocations; 
  

}



const fruitMarket = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a name and number of contents
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the total for that
  // fruit in all boxes as values.
const totals = {};
  boxes.forEach(function(fruit){
  if (!totals[fruit.contents]) {
    totals[fruit.contents] = fruit.number;
  } else {
    totals[fruit.contents] += fruit.number;
  }
  })

  return totals;
}

const averageFruitPerBox = boxes => {
  // function receives an array of fruit box objects.
  // each fruit box object has a contents and number property
  // for example
  // {
  //   contents: 'apples',
  //   number: 10
  // }

  // return an object that has contents as keys and the average number of
  // fruit per box for that fruit type as value

  const totals = {};
  boxes.forEach(function(fruit){
  if (!totals[fruit.contents]) {
    totals[fruit.contents] = [];
    totals[fruit.contents].push(fruit.number);
  } else {
    totals[fruit.contents].push(fruit.number);
  }
  });
  
  const fruitArr = Object.keys(totals); 
  
  const averages = {};
  fruitArr.map(function(fruit) {
    averages[fruit] = totals[fruit].reduce(function(a,b) {
   return a + b;                             
                   }, 0) / totals[fruit].length
  });

   return averages;




}



/* STRETCH GOALS */

const footballResultsWithObject = (teams, results) => {
  // function receives two parameters:
  // 1. an object which contains football team ids as keys and team names as values
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
const ids = Object.keys(teams); 
const league = {}; 

ids.forEach(function(id){
  league[teams[id]] = results[id]; 
})
return league; 
}

const footballResultsWithArray = (teams, results) => {
  // function receives two parameters:
  // 1. array of football team objects
  // 2. object which contains football team ids as keys and how many points the team has as values

  // take a look at the test for sample data

  // return an object has team names as keys and their number of points as values
  const league = {};
  const ids = teams.map(function(team){
  league[team.name] = results[team.id];
  })
  return league;
}

const stockMarket = prices => {
  // function receives an array of share prices produced during the day
  // each share price is an object which has a ticker and a price property.

  // { ticker: 'GOOG', price: 99}

  // return an object which has ticker as key another object as value,
  // the value object should have two properties: min and max which each contain
  // the min and max price achieved during the day
}

const calculateOrderPrice = (menu, order) => {
  // function receives two parameters: `menu` and `order`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
}


const calculateOrderPriceWithType = (menu, order, type) => {
  // function receives three parameters: `menu`, `order` and `type`

  // menu has item names as keys and prices as values
  // order has item names as keys and quantities as values
  // type is a string whose value is either `eatIn` or `takeAway`

  // calculate a total cost for each order using quantities from `order` and prices from `menu`
  // add 10% service charge for `eatIn` orders and a fixed delivery charge of 5 to `takeAway` orders

  // try to implement the service charge and delivery charge calculation without using if/else
  // hint: you can create an object with methods that calculate the charges and call the relevant one using
  // the order type provided
}

module.exports = {
  teaBagsLeft,
  shoppingList,
  footballResults,
  convertBookArrayToMap,
  dogCount,
  dogNames,
  fruitMarket,
  averageFruitPerBox,
  footballResultsWithObject,
  footballResultsWithArray,
  stockMarket,
  calculateOrderPrice,
  calculateOrderPriceWithType
}
