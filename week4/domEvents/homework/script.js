// Using a DOM property, retrieve the h1 and console.log it.
var h1element = document.querySelector('article h1')
console.log(h1element.textContent)
// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article')
const lastWord = article.querySelector('p:last-of-type')  
console.log(lastWord)
article.removeChild(lastWord)
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let x = document.querySelector('article h2')
console.log(x)
x.addEventListener('click',function(event){
    x.style.color = "red"
})
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let y = document.querySelector('article h3')
console.log(y)
y.addEventListener('click',function(event){
    y.style.display = "none"
})
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement("button")
button.textContent = "click me"
const p = article.querySelectorAll('p')
console.log(p[0])
article.appendChild(button)
button.addEventListener('click',function(event){
    for (i=0; i<p.length; i++) {
        p[i].style.fontWeight="bold"
    }
})
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
console.log(h1element)
h1element.addEventListener('mouseover',function(event){
    const size = Math.floor(Math.random() * 101)
    h1element.style.fontSize=size + "px"
})
//math.random() needs to be used as part of a function 

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
