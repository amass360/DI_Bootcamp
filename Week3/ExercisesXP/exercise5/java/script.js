typeof(15)
// Prediction: number
// Actual: number

console.log(1 == 1)

typeof(5.5)
// Prediction:number
// Actual: number

typeof(NaN)
// Prediction: undefined
// Actual: number, turns out NaN is represented to be "not a number" in JS
// which is an exception is it returns a number since it is not a valid string

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction:boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: undefined
// Actual: boolean, it is the same value as "true" because the operation of 1 
// does not equal 2 is in fact valid

"hamburger" + "s"
// Prediction: string
// Actual:

"hamburgers" - "s"
// Prediction: string
// Actual: hamburgers, returns this way because it is the string and not the 
// typeof() descriptive parameter so it returns the actual

"1" + "3"
// Prediction: number
// Actual: 13, the plus operation concatenates 

"1" - "3"
// Prediction: object
// Actual: -2, the minus operation does the simple subtraction 

"johnny" + 5
// Prediction: undefined
// Actual: johnny5, concatenates the values

"johnny" - 5
// Prediction: undefined
// Actual: NaN, can't perform the operation

99 * "hello"
// Prediction: undefined
// Actual: NaN

1 != 1
// Prediction: number
// Actual: false, you cannot do 1 cannot equal 1

1 == "1"
// Prediction: number
// Actual: true

1 === "1"
// Prediction: number
// Actual: false, because the types of 1 are different with one of 
// the numbers being in quotes and the other not being in quotes