//exercise1
//#1
const root = document.firstElementChild;
console.log(root);
const body = root.lastElementChild;
console.log(body);
const div = body.children[0];
console.log(div);

// For each of the questions, find 2 WAYS to access :

// 1. The div node
const divNode = document.getElementById('container');
// 2. The ul nodes, and render all of it's children one by one

// 3. The first li of each ul
