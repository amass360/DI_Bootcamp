//in classs exercise 1
function sale() {
    document.querySelector(".sale").style.display = 'block'
}
setTimeout(sale, 5000)

//exercise 2
let count = 10
const intervalID = setInterval(function countTime(){
    document.querySelector(".sale").textContent = `the sale ends in ${count} minutes`
    if(count===0) {
        clearInterval(intervalID)
    }
    count--
},1000)
