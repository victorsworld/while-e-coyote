const prompt = require 
("prompt-sync")({sigint: true})

let x = Number(prompt("enter a value for n: "));


let f1 = 0;
let f2 = 1;
let num = 1;


while(num <= x){
    let sum = f1 + f2
    console.log(sum)
    f1 = f2;
    f2 = sum
    num = num + 1;

    
}

