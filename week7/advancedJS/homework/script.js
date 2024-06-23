// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//--const cannot be reassigned but let can be so let is the one that will work inside
//of a loop and not "const"

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?

//--it will cause the value to be displayed as 0 when the alert is called for functThree


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//--I think that the variable will stay the same and it will have no effect in this case
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//--same as prior will it will print undefined or error in code since it will not be able to run

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

function winBattle(){
    return true;
}
// Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true;
  }
// Create a variable called experiencePoints.
var experiencePoints
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
if (winBattle() = true) {
    return experiencePoints = 10;
}
    else {
        experiencePoints = 1
    } 

// Console.log the experiencePoints variable.
console.log(experiencePoints)

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false


🌟 Exercise 4 : Colors
Instructions
Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.


🌟 Exercise 5 : Colors #2
Instructions
Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator.


Exercise 6 : Bank Details
Instructions
In this exercise, you have to decide which type of variables you have to use (ie. let or const):

Create a global variable called bankAmount which value is the amount of money currently in your account.
Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
Create an array with all your monthly expenses, both positive and negative (money made and money spent).
Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
Display your current bankAccount standing at the end of the month.
