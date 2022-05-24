const prompt = require('prompt-sync')({sigint: true})

let num1 = prompt("Choose a number. If it is divisible 3, you will see fizz. If it is divisble by 5 you will see buzz. If divisble by both you will see fizzbuzz    ");

let num2 = Number(prompt("Choose number: "));

if(num2 % 3 == 0)
{console.log("fizz")};

if(num2 % 5 == 0)
{console.log("buzz")};

if(num2 % 15 == 0)
{console.log("fizzbuzz")};












