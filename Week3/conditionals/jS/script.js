//exercise 1

let number = prompt('What is your age?')
if (number < 18){
    alert('Sorry, you are too young to drive this car. Powering off')
}
else if (number ==18){
    alert('Congratulations on your first year of driving. Enjoy the ride!')
}
else {
    alert('Powering On. Enjoy the ride!')
}

//exercise 2
//Write as comments the steps of the resolution of this piece of code
//Guess what will be the result before checking it

let a = 2 + 2;
//4

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

//exercise 3
//Write as comments the steps of the resolution of this piece of code
//Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

//answer: it will return 4 and it will break and nothing else will run