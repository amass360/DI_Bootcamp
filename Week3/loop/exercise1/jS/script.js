for (var i = 0; i <= 15; i++) {
    if (i % 2 ==0) {
        console.log(i, 'is even')
    } else {
        console.log(i, 'is odd')
    }
}

//exercise2
let names= ["john", "sarah", 23, "Rudolf",34]

// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
for (let i = 0; i < names.length; i++){
    if(typeof(names[i])=== "string"){
        if(names[i][0] === names[i][0].toUpperCase()){
            console.log(names[i])
        }
    }
}
// 2. Write a JavaScript for loop that will go through the variable names

// if the item is not a string, go out of the loop.
// if the item is a string, display it.
for (let i = 0; i < colors.length; i++) {
	if (typeof colors[i] !== "string") {
		console.log("Not a string");
		continue;
	}
	console.log(colors[i]);
}
