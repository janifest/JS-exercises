// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while (i <= 5) {   //stopping at 6 so that the loop includes 5
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for(let k = 1; k <= 5; k++) {
  console.log(k);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let n = 10;
while (n >= 1) {     //stopping at 0 so it includes 1
  console.log(n);
  n--;        //decrementing because we are counting down, otherwise it would be infinite
}

let p = 10;
do {
  console.log(p);
  p--;
} while (p >= 1)

for(let h = 10; h >= 1; h--) {
  console.log(h);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let q = 7;
while(q <= 27) {     //stopping at 28 so it includes 27, can also write (q <= 27)
  console.log(q);
  q++;
}

let g = 7;
do {
  console.log(g);
  g++;
} while (g <= 27)

for(let f = 7; f <= 27; f++) {
  console.log(f);
}
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let c = 0;
while(c <= 100) {
  console.log(c);
  c += 10;        //incrementing by 10, different from above, which only incremented by 1
}

let t = 0;
do {
  console.log(t);
  t += 10;
} while (t <= 100)

for(let d = 0; d <= 100; d += 10) {
  console.log(d);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}

//This is an infinite loop because the loop decrements counterFour every iteration. 
//The while loop will keep running until counterFour is greater than 2. 
//Since counterFour starts at 1 and decrements, it will never be greater than 2 and thus, an this loop will never break.

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let myFavorite = 33;
for (let m = 0; m <= myFavorite; m++) {  //myFavorite + 1 = 34, so the loop will include 33 --> EDIT: removed the +1 and changed comparison operator to <=
  console.log(m);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let myFaveInteger = 66;
for (let s = 0; s <= 100; s++){
  if(s === myFaveInteger){
    console.log(`${myFaveInteger} my favorite number!`)   //using string interpolation
  } else {
    console.log(`${s} not my favorite number`)
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// While loops begin by evaluating the condition. I find that these loops are most helpful when you may not know how many iterations you may need. The leniency of syntax of the while loop allows for more variation in creating a condition.
// Do-while loops begin by running the code before evaluating the condition, so these loops are more helpful when you know that you will need to run the code at least once before evaluating a condition.
// I tend to use for loops quite often, but I discovered that for loops are helpful for when you know how many iterations you will need.
// Also, overall, the aesthetic of the code may be important to the team, so a while loop may be more efficient when integrating different parts of the code versus a for loop, which conventionally defines its variables in the for loop syntax.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
  console.log("inside", insideCounter);
 }   console.log("***********************************");
 }

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// I found this part easy, because I have always really enjoyed learning about loops, so I have a good understanding of the concept.
// I did reference the syntax of the do-while loop since I find that I have not used it often: //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
// Also, I researched the functionalities of the different loops, since I have not really looked into that. 
// I learned a lot about the specialties of each loop and that the aesthetic of the code can be important to the 'art of code':
// https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/
// https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript

// Email your file to us or commit your file to GitHub and email us a link.
