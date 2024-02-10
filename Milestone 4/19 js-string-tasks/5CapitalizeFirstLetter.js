
let str = "hello word";

let words = str.split(' '); //Separate the words and make an Array

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
str = words.join(' ');//Join the Array values into a string

console.log(str);
