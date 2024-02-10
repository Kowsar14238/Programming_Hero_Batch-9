
const str = "Hello XML to xml";

let replaceStr = '';//Here new letters will store

for(let i = 0; i < str.length; i++){

    if(str[i] === 'x'){
        replaceStr += 'y';
    }
    if(str[i] === 'X'){
        replaceStr += 'Y';
    }
    else{
        replaceStr += str[i];//Which is not x or X it will store by this
    }
}

console.log(replaceStr);