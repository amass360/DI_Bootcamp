//exercise1
let x = 5;
let y = 5;

if (x > y) {
    console.log("x is the biggest number")
} if (x = y) {
    console.log("x is equal to y")
}
 else {
    console.log("y is the biggest number")
}

//exercise2
var newDog = "Chihuahua";
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
}

//exercise3
const number = prompt("EnterYourNumber","0")
if (number % 2 ==0) {
    console.log("x is an even number")
} else {
    console.log("x is an odd number")
}

//exercise4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
if(users.length === 0) {
    console.log("no one is online")
}
// If there is 1 user, console.log “<name_user> is online”.
if(users.length === 1) {
    console.log('${users[0]} is online')
}
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
if(users.length === 2) {
    console.log("${users[0]} and ${users[1]} are online")
}
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
else {
    const remainingUsers = users.length - 2
    console.log('${users[0]} and ${users[1]} and ${remainingUsers} are online')
}
const people = ["Greg", "Mary", "Devon", "James"];