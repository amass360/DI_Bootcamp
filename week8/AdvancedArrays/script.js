//below is the process for converting an array to a json file, which is necessary because JSON is the 
//method that is used for communication between the front end and the backend
// let arr = [
//     { id: 1, username: "jjj", email: "jjj@gmail.com" },
//     { id: 2, username: "mmm", email: "mmm@gmail.com" },
//   ];
//   console.log(arr);
//   let jsonArr = JSON.stringify(arr);
//   console.log(jsonArr);

//   let arrFromJson = JSON.parse(jsonArr)
//   console.log(arrFromJson)

//   let shopping = JSON.parse(JSON.stringify(groceries))

//   console.log(

//   )

  /* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */

//   function map(arr)
//   arr.forEach((item,i,arr2) => {
//     arr2[i] = item * 2
//   })
//   return[...ar]

  //another way to complete the same task
  function map2(arr) {
    let result = []
    for(let i = 0;i<length;i++) {
        result.push(arr[i]*2)
    }
    return result
  }

  let arr = [1,2,3,4]
//   map method
let arr2 = arr.map((item) => {
    if (item > 2) {
        return item * 2
    }
    return -1
})
//console.log(arr2)

//exercise
let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
  ];

  let html = users.map((item => {
    return `<div style="display:inline-block">
        <h2>${item.id}</h2>
        <h2>${item.name}</h2>
        <h2>${item.email}</h2>
    </div>`
  }))

  document.getElementById('root').innerHTML = html.join('')
  //innerHTML will allow us to inject items into the HTML for this particular method

  /* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */
  function findGreateThanThree (arr){
    const result = []
    arr.forEach((num)=>{
        if(num>3){
            result.push(num)
        }
    })
    return result
}


//next example

const userss = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Mor", email: "mmm@gmail.com" },
    { id: 3, name: "Marry", email: "marry@gmail.com" },
    { id: 4, name: "Ron", email: "ron@gmail.com" },
  ];



//finding 'r' in the names of the above users
let filterArr = users.filter((item) => {
    return (
        item.name.toLowerCase().includes("r") &&
        item.email.toLowerCase().includes("r")
    )
})
console.log(filterArr)

//get the user object with id equal to 3

/** destructuring */
let newArr = [1, 2, 3];
// let a = newArr[0];
// let b = newArr[1];
// let c = newArr[2];

let [a, c, b] = [1, 2, 3];
console.log(a, b, c);

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2