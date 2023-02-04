const prompt = require 
("prompt-sync")({sigint: true})

let x = Number(prompt("enter a number for x: "))
let y = Number(prompt("enter a number for y: "))

while(x % y !== 0 ){
    x += 1;
 
}
console.log(x + " is divisible by " + y)
