let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 because 34 + 21 is 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: new value a is 2 + 21 is 23
    // Actual: 23

    //for the 3rd question c will be null since it was not given a value

    console.log(3 + 4 + '5');
    //Prediction: 5 is commented out by putting it in parantheses
    //  so it will only do the operation of 3+4 which is 7
    //Actual: 75, found through research that once 3+4 operation is done
    //  and 7 is being put with '5' it concatenates the numbers together
    // to become 75