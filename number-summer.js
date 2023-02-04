const prompt = require 
("prompt-sync")({sigint: true})

let num = Number(prompt("Enter a number: "))
let sum = 0

while(num !== 0){
    sum += num; // sum = sum + num
    console.log("Sum: " + sum)
    num = Number(prompt("enter another number: "))

}
console.log("Final Sum: " + sum)