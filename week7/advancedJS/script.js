var num = 8;
var num = 10;

console.log(num);
// the last row "10" will display in the result since it's the most updated one

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(21));

// Change the code so the variable i will be undefined outside of the for loop

function numbers() {
  for (var i = 0; i < 5; i += 1) {
    console.log(i);
  }
    console.log(typeof i);
}
numbers();

// the only change we made above is adding the "type of" to the console log of the i after the for 
// loop for it to be defined outside of the loop itself

function checkyear(year) {
    let message;
    if (year > 2000) {
      message = "You are in the 21st century";
    } else {
      message = "You live in the Middle Age";
    }
    return message
  }
  
  console.log(checkyear(2001));

  //important to note that "message" needs to be declared at the beginning with the "let" BEFORE 
  //the if function starts in order to ensure it is properly defined
  //after declaring it, we need to ensure there are no "constants" for the "message" variable
  
  const calculator = (num1, num2, operator) => {
    return operator === '+' ? num1 + num2 :
           operator === '-' ? num1 - num2 :
           operator === '*' ? num1 * num2 :
           operator === '/' ? num1 / num2 :
           'Invalid operator';
  };
  
  // Example usage:
  console.log(calculator(5, 3, '+')); // Output: 8
  console.log(calculator(5, 3, '-')); // Output: 2
  console.log(calculator(5, 3, '*')); // Output: 15
  console.log(calculator(5, 3, '/')); // Output: 1.6666666666666667
  console.log(calculator(5, 3, '%')); // Output: Invalid operator

  //the above calculator defines each operation as a ternary
  //by using the corresponding question marks to define the event that will occur afterwards


//   const numbers = [10,11,12,15,20];

// Using the for each method, display only the even numbers in the array
  const numberss = [10,11,12,15,20];

//1st attempt
//   numberss.forEach(function(number, i, arr) { 
//     arr[i] = number%2==0; 
//     numberss.push(numberss[i])
// }); 

// console.log(numberss)

numberss.forEach(number => {
    if (number % 2 === 0) {
      console.log(number);
    }
  });

//this expression will satisfy the "for each" method because it will execute the function once
//for each array element

const words = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'
//1st attempt
// words.some((value)=> { return ('h%'); });

const startsWithH = words.some(word => word.startsWith('h'));

console.log(startsWithH);

const wordss = ["hello","hey","hola"];

// Check if all the elements of the array start with the letter 'h'

const startingWithH = wordss.every(word => word.startsWith('h'));

console.log(startingWithH)

//need to use the "every" function after wordss in order to pinpoint all of the characters in the 
//string and it is important to remember that console.log can only contain the declared variable
//in the parentheses

//replace method
console.log("bottle".replace("t", "z")); // → boztle

// Replacing all the "t" by "z"
console.log("bottle".replace(/[t]/g, "z")); // → bozzle

// Replacing the first vowel by "x"
console.log("Computer".replace(/[aeiou]/, "x")); // → Cxmputer

// Replacing all the vowels by "x"
console.log("Computer".replace(/[aeiou]/g, "x")); // → Cxmpxtxr

let text = "5";
let padded = text.padStart(4,"0");
console.log(padded)
//padStart will specify the length of the string with the 1st digit in the parentheses 
//and the 2nd character will be the inserted character prior to the predefined character, in this case 
//the 5, note that the 5 takes one of the places in the string so there will only be 3 spaces left
//for printing from the padStart so the output will be 0005

let texts = "5";
let paddeds = text.padEnd(4,"0");
console.log(paddeds)

//previously described logic for padStart applies for padEnd but in reverse

let text1 = "     Hello World!     a";
let text2 = text1.trimStart();
console.log(text2)

//trimStart will only affect the beginning of the string so the white space afterwards will not be
//eliminated and the letter "a" was inserted in order to check that the white space was still there

let text1s = "a     Hello World!     ";
let text2s = text1s.trimEnd();
console.log(text2s)

//same logic as trimStart but in reverse

let arr = ["blue", ["red", "yellow"], "green"];
let flattened = arr.flat();
console.log(flattened) // → ["blue", "red", "yellow", "green"]

let arr = ["blue", ["red", ["a","b"], "yellow"], "green"];
let flattened = arr.flat();
console.log(flattened) // → ["blue", "red", ["a","b"], "yellow", "green"]

let arr = ["blue", ["red", ["a","b"], "yellow"], "green"];
let flattened = arr.flat(2);
console.log(flattened)// →  ["blue", "red", "a", "b", "yellow", "green"]