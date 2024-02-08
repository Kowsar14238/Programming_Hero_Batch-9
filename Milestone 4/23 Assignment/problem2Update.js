/*
Now this function can find that is there any Boolean Number, Special Character or Number.
If found it will return invalid.
*/

console.log("=== Problem-02 ===");
function checkName(name){

    let checkType = typeof(name);

    if(checkType === "string"){

        let nameArray = name.split(''); //Convert the string to an array

        for(let i = 0; i < nameArray.length; i++){
            
            // Check any element is without string or length is not 1
            if(typeof nameArray[i] !== 'string' || nameArray[i].length !== 1){
                return "invalid";
            }
            // Check the element is not a letter or is a number
            if( !/[a-zA-Z]/.test(nameArray[i]) || !isNaN(Number(nameArray[i]))){
                return "invalid";
            }
        }

        let lastLetter = name.charAt(name.length-1);
        let lastLetterCase = lastLetter.toLowerCase();

        //Array of the last letters which indicate the Good Name
        let endLetterArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w']

        if(endLetterArray.includes(lastLetterCase)){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
console.log("==================New Check=====================")
console.log(checkName("Rash`edE"));
console.log(checkName("1RashedE"));
console.log(checkName("Rashed]y"));