// function playTheGame() {
//     if (!confirm()) {
//         return alert("No problem, Goodbye!")
//     }
//     // if confirm() {
//     //     prompt("Enter a number 0-10")
//     // }
//     {let userNumber = (confirm(prompt("Enter a number 0-10"))) 
//     if (userNumber < 0 || userNumber > 10) {
//         console.log(prompt("Sorry it’s not a good number, Goodbye"))
//     } 
//     else (userNumber > 0 && userNumber < 10) 
//         var computerNumber = (Math.random() * 11)
//         (alert(computerNumber))
// }
     
// }

function playTheGame() {
    const userNumber = Number(prompt("Enter a number 0-10"))
    if (userNumber > 0 && userNumber < 10) {
        var computerNumber = Math.ceil(Math.random() * 11)
        alert(computerNumber)
        return computerNumber
    }
    else if (!confirm()) {
        alert("No problem, Goodbye!")
    }
    else {
        alert("Sorry it’s not a good number, Goodbye")
    }
    compareNumbers(userNumber,computerNumber)
    count = count + 1
    if(count > 2) {
        alert("out of chances")
        count = 0 
        return 
    }
}

let attempt = 3
let maxAttempt = 3


function compareNumbers(userNumber,computerNumber) {
    // const userNumber = Number(prompt("Enter a number 0-10"))
    if (userNumber === computerNumber) {
        attempt =+ 1
        alert("WINNER!")
    }
    if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again")
        prompt("Enter a new number")
    }
    if (userNumber < computerNumber) {
        alert("Your number is bigger then the computer’s, guess again")
        prompt("Enter a new number")
    }
        // return function compareNumbers() {
        //     if(Attempt > maxAttempt) {
        //         alert("out of chances")
        //     }
        // } 
}



