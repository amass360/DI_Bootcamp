//variables need to be declared for the favcolor input in the html 
//and then a separate variable for the selector in order for the current 
//color to be displayed

//color pallate
let container = document.querySelector(".grid-container")
let colorPicker = document.querySelector('#favcolor')
let currentColor = colorPicker.value
console.log(currentColor)
colorPicker.addEventListener("change", function(event) {
    currentColor = event.target.value
    console.log(currentColor) 
})

//red button
let red = document.querySelector("#red")
red.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//orange button 
let orange = document.querySelector("#orange")
orange.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//dark orange button
let darkOrange = document.querySelector("#darkOrange")
darkOrange.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//yellow
let yellow = document.querySelector("#yellow")
yellow.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lightGreen
let lightGreen = document.querySelector("#lightGreen")
lightGreen.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//turquoise
let turquoise = document.querySelector("#turquoise")
turquoise.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//green
let green = document.querySelector("#green")
green.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//mediumaquamarine
let mediumaquamarine = document.querySelector("#mediumaquamarine")
mediumaquamarine.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lightBlue
let lightBlue = document.querySelector("#lightBlue")
lightBlue.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//#87CEFA
let lightNavy = document.querySelector("#lightNavy")
lightNavy.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//midNavy
let midNavy = document.querySelector("#midNavy")
midNavy.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//blue
let blue = document.querySelector("#blue")
blue.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//darkPurple
let darkPurple = document.querySelector("#darkPurple")
darkPurple.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//midPurple
let midPurple = document.querySelector("#midPurple")
midPurple.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lighterPurple
let lighterPurple = document.querySelector("#lighterPurple")
lighterPurple.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lightPurple
let lightPurple = document.querySelector("#lightPurple")
lightPurple.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lightPink
let lightPink = document.querySelector("#lightPink")
lightPink.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//lightGrey
let lightGrey = document.querySelector("#lightGrey")
lightGrey.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//darkGrey
let darkGrey = document.querySelector("#darkGrey")
darkGrey.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//black
let black = document.querySelector("#black")
black.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//white
let white = document.querySelector("#white")
white.addEventListener("click",function(event) {
    currentColor = event.target.value 
})

//grids of grey boxes
for (i=0; i<(60*30); i++) {
    const gridItem = document.createElement('div')
    gridItem.className='grid-item'
    container.appendChild(gridItem)
}

let fillBoxes = document.querySelectorAll(".grid-item")
for (fillBox of fillBoxes) {
    fillBox.addEventListener("mousedown",function(event){
        event.target.style.backgroundColor = currentColor  
    })
}