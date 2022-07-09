// 1. Hello, object

/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user['name'] = 'Pete';
console.log(user);
delete user.name;
console.log(user);

// 2. Check for emptiness
/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/
function isEmpty(obj){
  return Object.keys(obj).length === 0 ? true : false;
}
//test
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 3. Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = Object.values(salaries).reduce((a,b) => 
  a+b,0);

console.log(sum);


// 4. Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

function multiplyNumeric(obj){
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'number'){
      obj[key] *= 2;
    }
  })
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);


// Sources
// Practiced ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// Looking for ways to determine if an object is empty: https://levelup.gitconnected.com/different-ways-to-check-if-an-object-is-empty-in-javascript-e1252d1c0b34
// Learning how to use forEach:
// https://bobbyhadz.com/blog/javascript-update-all-values-in-object
// Syntax for typeof: https://www.w3schools.com/js/js_typeof.asp
// how to access object values: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
