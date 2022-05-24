const prompt = require('prompt-sync')({sigint: true})

let num1 = Number(prompt("What is your Earth weight?"));

console.log(num1);

let num2 = Number(prompt("Enter a number 1-6 for the planet you plan to fight on."));


console.log (num2);

if(num2 === 1)
{console.log(num1 * 0.78);} 

if(num2 === 2) 
{console.log(num1*0.39);}

if(num2 === 3)
{console.log(num1 * 2.65);}

if(num2 === 4)
{console.log(num1 * 1.17 );}

if(num2 === 5)
{console.log(num1 * 1.05);}

if(num2 === 6)
{console.log(num1 * 1.23);}



