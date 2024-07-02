// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//I believe the output will be 'I am John Doe from {undefined},{undefined}. Latitude {undefined}, Longtitude {undefined}
//turns out I was wrong and the output includes all of the referenced information
//outputs: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//it is able to recognize the substrings and pull out each of those and label them as an array

// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(objUser){
    //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'
function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}
//got this answer from ChatGPT but makes sense that the displayStudentInfo function needs to be
//redefined and that there is a constant added within it containing the 'first' and 'last' parameters

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Output: 'Your full name is Elie Schoppik'

// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const res = Object.values(users)
console.log(res)

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
res.forEach((item, i, arr) => {
    arr[i][1]*=2
});
let result = Object.