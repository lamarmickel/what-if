const prompt = require('prompt-sync')({sigint: true})

let num1 = Number(prompt("Choose a random number 1-7"));

console.log(num1);

if(num1 === 1)
{console.log("Monday")};

 if(num1 === 2)
{console.log ("Tuesday")};

 if(num1 === 3)
{console.log("Wednesday")};

 if(num1 === 4)
{console.log("Thursday")};

 if(num1 === 5)
{console.log("Friday")};

 if(num1 === 6)
{console.log("Saturday")};

if(num1 === 7)
{console.log("Sunday")};

if(num1>7)
{console.log("Error")};









