const prompt = require 
("prompt-sync")({sigint: true})

let num = Number(prompt("Enter a number: "))

let numD = num

while(num <= 100){
    num = num + numD; // sum = num + num
    numD = num
    console.log("Doubled Number:" + numD)
}
console.log("Final Number is: " + num)