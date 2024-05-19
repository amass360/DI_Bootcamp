5 + "34"
// Prediction: 534
// Actual: 534

console.log(" " + 0)

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: .5
// Actual: 0, the percent operator means to divide 10 by 5 and to return the 
// remainder and since 10/5 is 2 and there is no remainder it is 0

5 % 10
// Prediction: .5
// Actual: 5, since after the division after the decimal you have a remainder
// of 5 therefore the answer would be 5

" " + " "
// Prediction: blank
// Actual: blank, because you are adding nothing to nothing 

" " + 0
// Prediction: undefined
// Actual: 0, adds a space in front

true + true
// Prediction: true
// Actual: 2, because JS converts the true boolean values to 1, which 
//effectively carries out the operation of 1+1, which is 2

true + false
// Prediction: false
// Actual: 1, in JS "false" is represented as 0 and true is 1 so 
//the 1+0 operation results in 1

false + true
// Prediction: false
// Actual: 1, same reasoning as previous

false - true
// Prediction: undefined
// Actual: -1, carries out the operation of 0-1, which is -1

!true
// Prediction: true
// Actual: false, the exclamation in front of the variable makes it
//compute to be oppopsite, which makes it the opposite of true thereby
//false

3 - 4
// Prediction: -1
// Actual: -1
