let m = 6;
let n = 6;

//Initialize a 2D array
const map = Array.from({ length: m }, () => Array(n).fill(0));


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function coordinate(x, y) {
    return `${x},${y}`;
}

//Create a set for better lookup later
const goals = new Set();

//Generate Start point and add to set
const startPos = [getRandomInt(0,Math.floor(m/2)), getRandomInt(0,Math.floor(n/2))];
map[startPos[0]][startPos[1]] = 'S';
goals.add(coordinate(startPos[0],startPos[1]));

//Generate End point and add to set
const endPos = [getRandomInt(Math.floor(m/2),m), getRandomInt(Math.floor(n/2),n)];
map[endPos[0]][endPos[1]] = 'E';
goals.add(coordinate(endPos[0],endPos[1]));

//Print Current Set
console.log(Array.from(goals));

//SetUp Neighbors
const checkpoints = new Set();

numChecks = getRandomInt(1,5);

console.log('Setting up ' + String(numChecks) + ' checkpoints.')


// Print the elements of the 2D array
for (let i = 0; i < numChecks; i++) {
    console.log(map[i]);
}


// Print the elements of the 2D array
for (let i = 0; i < m; i++) {
    console.log(map[i]);
}