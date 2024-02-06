// Loop through an object and print the key-value pairs with their `types`

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

//Object: for prop in

for(const prop in myObject){
    let properties = (myObject[prop]);
    let propertyTypes = (typeof(myObject[prop]));

    console.log(prop, ': ', properties, ' | ', "type: ", propertyTypes);
}

/*
const myObjectKeys = Object.keys(myObject);
// console.log(myObjectKeys);

//Array: for prop of
for(const key of myObjectKeys){
    let properties = (myObject[key]);
    let propertyTypes = (typeof(myObject[key]));

    console.log(key, ': ', properties, ' | ', "type: ", propertyTypes);
}*/