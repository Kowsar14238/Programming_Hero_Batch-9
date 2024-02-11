
const statement = 'I am a hard working person';

//Split the sentence into an array of words
const words = statement.split(' ');
//Reverse the order of the words
const reverseWords = words.reverse();
//Join the reversed words back into a sentence
const reverseSentence = reverseWords.join(' ');

console.log(reverseSentence);