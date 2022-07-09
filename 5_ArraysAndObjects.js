// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals

let animals = [];
console.log(animals);

// Exercise 2. Add the string "frog" to the array

animals.push("frog");
console.log(animals);

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push("elephant", "cow", "owl", "lion");
console.log(animals);

// Exercise 4. Update the first item in the array to be "gorilla"

animals[0] = 'gorilla';
console.log(animals);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length);

// Exercise 6. Print the first item in the array
console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log(animals[animals.length-1]);

// Exercise 8. Remove the last item from the array

animals.pop();
console.log(animals);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["water", "tea", "coffee", 3, 6, 9];

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for(let i = 0; i < assortedThings.length; i++){
  console.log(`Item #${i} is ${assortedThings[i]}`);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function checkNumSize(arr){
  for(let j = 0; j < arr.length; j++){
    if(arr[j] > 100){
      console.log(`${arr[j]} BIG`);
    } else if(arr[j] > -1 && arr[j] < 101){ //between 0 and 100 inclusive
      console.log(`${arr[j]} small`);
    } else {
      console.log(`${arr[j]} negative`);
    }
  }
}

checkNumSize([1, 0, 100, -100]);
checkNumSize([50, 51, 23, 99]);
checkNumSize([-30, -2, -10, -78]);
checkNumSize([0, 0, 0, 0]);
checkNumSize([300, 101, 1000, 205]);

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

let me = {
  name: 'Janice'
  , favoriteAnimal: 'elephant'
  , favoriteNumber: 3
}
console.log(me);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me['favorite-drink'] = 'milk tea';
me.favoriteColor = 'pink';
console.log(me);

// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = 'owl';
console.log(me);

// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me['favoriteAnimal']);
console.log(me.favoriteAnimal);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

/* 
Hi! I found this exercise easy, because I have been practicing array methods everyday. 

However, for exercise 11, the prompt did not state if the output for the numbers 0 and 100---it stated an output 
for numbers greater than 100, numbers between 0 and 100, and numbers less than 0. I would assume that "between 0 and 100" 
does not include 0 and 100. However, for simplicity, I made the if-statement inclusive of 0 and 100. 
If that were not the case, I would have made two more 'else-if statements' outputting '0 zero' and '100 one-hundred'. 
I did intend to ask this in the Slack, but since everyone is on break right now, I wanted to respect that time off.

As far as the object exercises, I reviewed the concepts using the Exercism link in the Pre-work: 
https://exercism.org/tracks/javascript/concepts/objects

I kept getting an error message due to incorrect syntax for retrieving the values of keys when using bracket notation. 
I was using a dot AND a bracket (me.['name']). Now I know for bracket notation, you only need the brackets.

I also thought it was interesting that when I initialize a new key with brackets, using quotes, it remains in quotes when I print the full object out. 
If you console.log the me object I created, none of the keys has quotes except for the one I initialized in quotes after the creation of the object.

Overall, this was a very fun and informative exercise!
*/
// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
