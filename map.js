/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
function doubleNumbers(arr){
    return arr.map(function(num) {
        return num*2 ; 
      }) ;
  
  }
  console.log(doubleNumbers([2, 5, 100]));
  //output : *2==> [4,10,200] 
  /*
  this map return new array but map can't change the orginal array

  */ 
  //////////////////////////////////////////////
/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/

function stringItUp(arr){
  // your code here
return arr.map(function(str){
 return str.toString() ; 

})

}
console.log(stringItUp([2, 5, 100]));
/*
Result:
 * ["2", "5", "100"]
*/
/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

function capitalizeNames(arr) {
    return arr.map(function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
/* output :

*==>  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
function namesOnly(arr) {
    return arr.map(function(person) {
        return person.name;
    });
}


console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 

/* 
Exercise 5:  
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */


function makeStrings(arr){
    return arr.map(function(person) {
        if (person.age>18)
        return person.name  + "can go to The Matrix";
    else{
       return person.name + "is under age!!";
    }
    });
}
console.log(makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]));
     /*
     Exercise 6:  
     * 
     * Make an array of the names in h1s, and the ages in h2s
     *
     * Test Case: 
     *
     * console.log(readyToPutInTheDOM([
     *   {
     *       name: "Angelina Jolie",
     *       age: 80
     *   },
     *   {
     *       name: "Eric Jones",
     *       age: 2
     *   },
     *   {
     *       name: "Paris Hilton",
     *       age: 5
     *   },
     *   {
     *       name: "Kayne West",
     *       age: 16
     *   },
     *   {
     *       name: "Bob Ziroll",
     *       age: 100
     *   }
     * ])); 
     * 
     * Result:
     * 
     * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
     * "<h1>Eric Jones</h1><h2>2</h2>", 
     * "<h1>Paris Hilton</h1><h2>5</h2>", 
     * "<h1>Kayne West</h1><h2>16</h2>", 
     * "<h1>Bob Ziroll</h1><h2>100</h2>"*/
     function readyToPutInTheDOM(arr) {
        return arr.map(function(person) {
            return `<h1>${person.name}</h1><h2>${person.age}</h2>`;
        });
    }
    
   
    console.log(readyToPutInTheDOM([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 }
    ])); 
    
      /*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/

function doubleValues(arr){
    return arr.map(function(num) {
        return num*2 ; 
      }) ;
  }
  console.log(doubleNumbers([2, 5, 100]));
  console.log(doubleNumbers([2, -4, -6]));
  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
  
  function valTimesIndex(arr){
    return arr.map(function(value ,index) {
        return value *index ;  
      }) ; 
   
 }
 console.log(valTimesIndex([1, 2, 3, 4, 5])); // [0, 2, 6, 12, 20]
 /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  
 function extractKey(arr, key) {
    return arr.map(function(obj) {
        return obj[key];
    });
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));

/*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  
function extractFullName(arr) {
    return arr.map(function(obj) {
        return obj.first + ' ' + obj.last;
    });
}


console.log(extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
]));























