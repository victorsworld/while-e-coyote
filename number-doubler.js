const prompt = require 
("prompt-sync")({sigint: true})

let num = Number(prompt("Enter a number: "))

let numD = num

while(num <= 100){
    num = num + numD; // sum = sum + num
    console.log("Doubled Number:" + num)
}
console.log("Final Number is: " + num)