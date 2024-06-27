//Exercise XP 1

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//This will print [bread, carrot, potato,chicken, apple, orange] all IN 1 ARRAY instead of printing
//the array with additional brackets around the fruit and vegetable arrays since the const result
//contains a spread operator 

// ------2------
const country = "USA";
console.log([...country]);
//This console log will print U,S,A as separate within 1 array because USA is not in brackets so the 
//spread operator effectively spreads them out

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//the spread operator is by itself with nothing immediately next to it and the 2 commas are by themselves
//in their own bracket so there is nothing for the spread operator to spread so it draws an error

// 🌟 Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


             // Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
            //  const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
            const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
            //the dollar sign will pinpoint to everything in the const array

            console.log(welcomeStudents);

            // 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
            const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');

            console.log(fullStackResidents)
            // 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
            const lastNamesOfFullStackResidents = users
            .filter(user => user.role === 'Full Stack Resident')
            .map(user => user.lastName);
          
          console.log(lastNamesOfFullStackResidents);    
          //the lack of arrow makes sense in this case as we are adding 2 conditions for the const
                  