const prompt = require('prompt-sync')({sigint: true});



let num1 = Number(prompt("What is your age? "));

console.log(num1);

if (num1 < 16){
console.log("You cant drive");}


else if (num1 === 16)
{console.log("You can drive but not vote")}



else if (num1 === 17)
{ console.log("You can drive but not vote")}


 
       
else if (num1 <= 24)
       {console.log("You can vote but not rent a car");}



else if (num1 >= 25)
{console.log("You can do pretty much anything")}


   