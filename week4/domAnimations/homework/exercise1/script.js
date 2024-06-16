// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
function hello() {
    console.log(alert('Hello World'))
    setTimeout(hello, 2000)
}

hello()
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(function() {
    var div = document.getElementById("container")
    var newParagraph = document.createElement("p") 
    newParagraph.textContent = "Hello World"
    div.appendChild(newParagraph)
}, 2000);

//I noticed that this only worked after I placed the 2 vars inside the function and it 
//did not work when they were outside the function 
//also the function only worked when I had newParagraph as a 
//global variable, confused why that makes a difference in this case
//WOULD APPRECIATE ASSISTANCE UNDERSTANDING THIS


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let intInterval = setInterval(function() {
    var div = document.getElementById("container")
    var newParagraph = document.createElement("p") 
    var paragraphCount = div.getElementsByTagName("p").length
    newParagraph.textContent = "Hello World"
    let button = document.getElementById("clear")
    clearInterval(onclick("clear"))
    if (paragraphCount >= 5) {
        clearInterval(intInterval)
    } 
}, 2000)

//ChatGPT says that the referencing of the button with the class 
//"clear" needs to be written out after the function, I want to know
//if I can do this with the button declared WITHIN the function?