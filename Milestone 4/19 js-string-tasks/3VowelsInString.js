// const str = "The quick brown fox jumps over the lazy dog.";
// const str = "zw is ear of urix.";
// const str = "zw is ear";
// const str = "a e s r i o u ";
// const str = "aesriou ";
const str = "qrwedgstds"

const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

let containsAllVowels = true;

for(let i = 0; i < vowelsArray.length; i++){
    if(str.toLowerCase().indexOf(vowelsArray[i]) === -1){
        containsAllVowels = false;
        break; // Once any vowel is missing, we can stop checking
    }
}

if(containsAllVowels){
    console.log("Contains all the vowels");
} else {
    console.log("Not contains all the vowels");
}
