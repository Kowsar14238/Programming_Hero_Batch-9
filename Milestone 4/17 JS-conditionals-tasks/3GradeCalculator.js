/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let marks = 96;//Marks must between 0 to 100
// let marks = 86;//Marks must between 0 to 100
// let marks = 76;//Marks must between 0 to 100
// let marks = 66;//Marks must between 0 to 100
// let marks = 56;//Marks must between 0 to 100
// let marks = 0;//Marks must between 0 to 100
let marks = -6;//Marks must between 0 to 100

if(marks <= 100 && marks >= 90){
    console.log("You grade is 'A'");
}
else if(marks < 90 && marks >= 80){
    console.log("You grade is 'B'");
}
else if(marks < 80 && marks >= 70){
    console.log("You grade is 'C'");
}
else if(marks < 70 && marks >= 60){
    console.log("You grade is 'D'");
}
else if(marks < 60 && marks >= 0){
    console.log("You grade is 'F'");
}
else{
    console.log("Your marks must be between 0 to 100");
}

