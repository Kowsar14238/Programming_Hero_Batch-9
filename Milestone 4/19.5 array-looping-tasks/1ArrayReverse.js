
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let colorsNewArray = [];

for(let i = 0; i < colors.length; i++){
    colorsNewArray.unshift(colors[i]);
}

console.log(colorsNewArray);