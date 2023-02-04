const prompt = require 
("prompt-sync")({sigint: true})

let str = String(prompt("Enter something: "))

let str2 = str
//while is going till the condition in () is met.
while(str.length <= 10){
    console.log(str)
str = str + str2

}
console.log(str)
