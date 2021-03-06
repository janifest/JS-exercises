// In these exercises, you will be working on conditional statements,
// namely the if / else if / else and switch/case conditionals.

// For these exercises, you will place your code in a function block.
// If you don't know what a function is yet, that's ok, your code will be the
// same. The variables will be defined for you, you just have to plug in the
// logic.

// For example, if asked for exercise 0 to assign the value of myAnswer to the sum
// of num1 and num2, and were given this construct:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// You would put your code between the "below here"
// and "above here" blocks as shown:

// function exercise0(num1, num2) {
//   let myAnswer;
//   // ------------------------------------------
//   // Write your code for exercise 0 below here:
//   // ------------------------------------------
//   myAnswer = num1 + num2;
//   // ------------------------------------------
//   // And above here
//   // ------------------------------------------
//   return myAnswer;
// }

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// EXERCISE 1.
// First reassign the value of `answer1` so that it has the value of:
// "num1 is small"
// Write an if statement that checks if a variable `num1` is greater than 10.
// If it is, then within your if statement code change the value of answer1 so
// that its new value would be a string that says:
// "The value of num1 is <num1 value> and is greater than 10".

function exercise1(num1) {
  let answer1 = "";
  // ------------------------------------------
  // Write your code for exercise 1 below here:
  // ------------------------------------------
    answer1 = "num1 is small";
  if (num1 > 10) {
    answer1 = `The value of num1 is ${num1} and is greater than 10`;
  }
  // ------------------------------------------
  // And above here
  // ------------------------------------------
  return answer1;
}

console.log(exercise1(0));  //num1 is small
console.log(exercise1(1));  //num1 is small
console.log(exercise1(10)); //num1 is small
console.log(exercise1(11)); //the value of num1 is 11...
console.log(exercise1(100)); //the value of num1 is 100...

// EXERCISE 2.
// Write an if/else conditional statement that if given a number will assign
// a string value of:
// "<num2 value> is even" to `answer2`,
// if `num2` is even
// and a value of "<num2 value> is odd" to `answer2`,
// if `num2` is odd.
// ie. if num2 has a value of 4 then the message should read:
// "4 is even"

function exercise2(num2) {
  let answer2;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    if (num2 % 2 === 0){
      answer2 = `${num2} is even`;
    }
    else {
      answer2 = `${num2} is odd`;
    }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer2;
}

console.log(exercise2(0)); //even
console.log(exercise2(2)); //even
console.log(exercise2(1)); //odd
console.log(exercise2(53)); //odd
console.log(exercise2(3)); //odd

// EXERCISE 3.
// Write an if/else if/else block such that if `num3` is positive, then
// answer3 is assigned the string value of:
// "<num3 value> is positive"
// if `num3` is negative, then the value should be:
// "<num3 value> is negative"
// otherwise if the value is zero it should return
// "<num3 value> is zero"

function exercise3(num3) {
  let answer3;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    if (num3 > 0) {
      answer3 = `${num3} is positive`;
    } else if (num3 < 0) {
      answer3 = `${num3} is negative`;
    } else {
      answer3 = `${num3} is zero`;
    }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer3;
}

console.log(exercise3(0)); //zero
console.log(exercise3(1)); //positive
console.log(exercise3(200)); //positive
console.log(exercise3(-1)); //negative
console.log(exercise3(-50)); //negative

// EXERCISE 4.
// Write an if/else statement such that if `varA` and `varB` are strings or
// numbers and they have equal values, then change the value of answer4 to
// "varA and varB are equal"
// otherwise assign a value of "varA and varB differ"

function exercise4(varA, varB) {
  let answer4;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    if (varA == varB) {   //abstract comparison
      answer4 = "varA and varB are equal"
    } else {
      answer4 = "varA and varB differ"
    }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer4;
}

console.log(exercise4(0, "0")); //equal
console.log(exercise4(3, "three")); //differ
console.log(exercise4(6,6)); //equal
console.log(exercise4("two", "two")); //equal
console.log(exercise4("6",6)); //equal

// EXERCISE 5.
// In exercise 4, what are some of the unexpected cases where `varA` and `varB`
// seemed like they are equal, but would not pass the tests? In your analysis
// consider other data types beside strings and variables.

//  If we were to compare varA and varB using === rather than ==, we would take their data types into account.
//  For example, if varA equals "3" with a string data type and varB equals 3 with a number data type, we would expect the computer to read it as true
//  most of the time. However, when comparing with a triple equals sign (===), the variables are not completely/strictly equal and the comparison would, 
//  therefore, be false.
//  Additionally, when working with booleans, we may expect 0 to equal false and 1 to equal true, but their data types are not the same and would fail
//  the strict comparison.

// EXERCISE 6.
// Here, assign the value of true to answer6 if:
// `varA` and `varB` are equal, but `varA` or `varB` does not equal `varC`
// in the event this is not the case, change the value of answer6 to false
function exercise6(varA, varB, varC) {
  let answer6 = "unassigned";
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
     if (varA === varB && varA != varC) {   //only checking varA != varC because varA === varB already, avoiding redundancy -- is that okay? 
       answer6 = true;
     } else {
       answer6 = false;
     }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer6;
}

console.log(exercise6(2,2,4)); //true
console.log(exercise6(1,2,4)); //false
console.log(exercise6(3,3,3)); //false
console.log(exercise6(5,6,6)); //false
console.log(exercise6(200,200,350)); //true

// EXERCISE 7.
// Use a switch conditional statement with case clauses such that if `num7` is
// a number and it has a value of 1 that `answer7` is assigned the string:
// "You won!"
// if num7 is 7, then answer7 should be:
// "You are lucky!"
// if num7 is 101, then answer7 should be:
// "Welcome to coding 101!"
// if num7 is 1000000, then answer7 should be:
// "You are one in a million!"
// Othewise, assign answer7 a value of:
// "Thanks for that!"

function exercise7(num7) {
  let answer7;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  switch (num7){
    case 1: answer7 = "You won!"
      break;
    case 7: answer7 = "You are lucky!"
      break;
    case 101: answer7 = "Welcome to coding 101!"
      break;
    case 1000000: answer7 = "You are one in a million!"
      break;
    default: answer7 = "Thanks for that!"
      break;
  }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer7;
}

console.log(exercise7(1)); //you won
console.log(exercise7(7)); //you are lucky
console.log(exercise7(101)); //welcome to coding 101
console.log(exercise7(1000000)); //you are one in a million 
console.log(exercise7(0)); //thanks for that

// EXERCISE 8.
// Using any conditional assign the value of true to answer8 if:
// the values of amount1 and amount2 are between the values of
// minimum and maximum
// if not, assign a value of false to answer8
function exercise8(amount1, amount2, minimum, maximum) {
  let answer8;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    if(amount1 > minimum && amount2 > minimum && amount1 < maximum && amount2 < maximum) { //using && because they all must be true
        answer8 = true;
    } else {
      answer8 = false;
    }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer8;
}

console.log(exercise8(4,50,1,100)); //true
console.log(exercise8(2,4,1,10)); //true
console.log(exercise8(3,4,3,5)); //false
console.log(exercise8(1,12,0,15)); //true
console.log(exercise8(0,50,0,50)); //false

// EXERCISE 9.
// In this exercise, if `item` is a number, follow the rules given in Exercise 7
// except that `answer7` is replaced by `answer9`
// If `item` is not a number, then assign a value to answer9 of:
// "Please send a number, that was a <data type>."
// for example, if item===true, the value should be:
// "Please send a number, that was a boolean."
function exercise9(item) {
  let answer9;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
    if (typeof item === "number") {
      switch(item) {
       case 1: answer9 = "You won!"
        break;
      case 7: answer9 = "You are lucky!"
        break;
      case 101: answer9 = "Welcome to coding 101!"
        break;
      case 1000000: answer9 = "You are one in a million!"
        break;
      default: answer9 = "Thanks for that!"
        break;
      }
    } else {
      answer9 = `Please send a number, that was a ${typeof item}.`;
    }
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer9;
}

console.log(exercise9(1)); //you won
console.log(exercise9(7)); //you are lucky
console.log(exercise9(101)); //welcome to coding 101
console.log(exercise9(1000000)); //you are one in a million
console.log(exercise9(0)); //thanks for that
console.log(exercise9(true)); //...that was a boolean 
console.log(exercise9("hello")); //...that was a string

// EXERCISE 10.
// This question is a modified version of a classic programming question
// called "Fizz Buzz"
// Using a conditional, assign a value of:
// "Fizz" to `answer10` if the value of `num10` is divisible by 3
// "Buzz" to `answer10` if the value of `num10` is divisible by 5
// "Fizz Buzz" to `answer10` if the value of `num10` is divisible by 15
// and if none of these conditions are satisfied, then assign the value of
// `num10` to `answer10`

function exercise10(num10) {
  let answer10;
  // --------------------------------------------
  // Write your code for the exercise below here:
  // --------------------------------------------
  answer10 = num10;   //assigning the default value here
  
  if (num10 % 3 === 0) {    //opted against using else if statements so that we can check all of the conditions without skipping any
    answer10 = "Fizz";
  }
  
  if(num10 % 5 === 0) {
    answer10 = "Buzz";
  }
  
  if(num10 % 15 === 0) {
    answer10 = "Fizz Buzz";
  }
  
  // --------------------------------------------
  // And above here
  // --------------------------------------------
  return answer10;
}

console.log(exercise10(3)); //fizz
console.log(exercise10(5)); //buzz
console.log(exercise10(15)); //fizz buzz
console.log(exercise10(0)); //fizz buzz
console.log(exercise10(45)); //fizz buzz

// Congrats, you made it to the end! You rock!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I did not find these exercises too difficult, but they were challenges that I have not seen before, so I greatly enjoyed working on them. 
// I am practicing taking my time and always testing, no matter how confident I feel in my code.
// I reviewed the remainder operator here:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// As well as the syntax for the switch operator here:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// I tested all of them in replit and, luckily, found a few syntax errors that would have been fatal to my code.

// Email your file to us or commit your file to GitHub and email us a link.
