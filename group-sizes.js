const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("Choose a class size: Any random number  "));

let groupsOf3 = 0;
let groupsOf2 = 0;


if (classSize % 3 === 0){ 
    groupsOf3 = classSize/3;
    
}

if (classSize % 3 === 1){ 
    classSize -= 4;
    groupsOf2 = 2;
    groupsOf3 = classSize / 3;
}


if (classSize % 3 === 2){ 
    classSize -= 2;
    groupsOf2 = 1;
    groupsOf3 = classSize / 3;  
}

console.log("Groups of 3: " + groupsOf3);
console.log("Groups of 2: " + groupsOf2);




