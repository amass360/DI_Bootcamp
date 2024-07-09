// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
const fruits = ["apple", "pear", "banana"];

function makeAllCaps(words) {
    return new Promise((res,rej) => {
         let every = words.every(word => typeof word == 'string')
        if(every) {
            return words.map((word) => word.toUpperCase())
        }
        else {
            reject('error: not all items are strings')
        }
        })
}

makeAllCaps(fruits)
.then(uppercaseWords => {
    console.log(uppercaseWords);
    return sortWords(uppercaseWords)
})
.then((sortWords) => {
    console.log(sortWords);
})
.catch((err) => {
    console.log(err);
})
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))

function sortWords(words) {
    return new Promise((resolve,reject) => {
        if(words.length > 4){
            resolve(words.sort())
        }
        else{
            reject('error: array is less or equal to 4')
        }
    })
} 


//exercise 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
//   Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

console.log(JSON.parse(morse));

const toJs =(jsonString) => {
    return new Promise((res,rej) => {
        let objMorse
        try {
            objMorse = JSON.parse(jsonString)
        } catch (error) {
            rej("error: this is not a valid JSON")
        }
        if(Object.keys(objMorse).length === 0) {
            rej("error: this is an empty JSON object")
        }
    })
}


const toMorse = (morseObj) => {
    const userStr = prompt('Enter a word...')
    if(!userStr){
        return Promise.reject("no input provided")
    }
    //Hello --> ['h','e','l','l','o']
    const arrStr = userStr.toLowerCase().split("")
    const returnArr = arrStr.map((char) => {
        if(char in morseObj){
            return morseObj[char]
        }
        else {
            return Promise.reject('Char ${cahr} not exist in the morse code')
        }
    })
    return Promise.resolve(returnArr)
}

toJs(morse)
.then((result) => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})