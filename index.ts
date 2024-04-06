#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
let keepgoing=true;
do{
let answer=await inquirer.prompt([
    {message: "Select your operator: ",type: "list",name:"operator",choices:["Addition","Subtraction","Multiplication","Division","More Functions","Exit"]},
]);
if(answer.operator==="Addition"){
let add=await inquirer.prompt([{message: "Enter the First Number: ",type: "number",name:"num1"},
{message: "Enter the Second Number: ",type: "number",name:"num2"},]);
     console.log(`Addition is: ${add.num1+add.num2}`);}
else if(answer.operator==="Subtraction"){
    let sub=await inquirer.prompt([{message: "Enter the First Number: ",type: "number",name:"num1"},
    {message: "Enter the Second Number: ",type: "number",name:"num2"},]);    
    console.log(`Subtraction is: ${sub.num1-sub.num2}`);}
else if(answer.operator==="Multiplication"){
    let mul=await inquirer.prompt([{message: "Enter the First Number: ",type: "number",name:"num1"},
{message: "Enter the Second Number: ",type: "number",name:"num2"},]);
    console.log(`Multiplication is: ${mul.num1*mul.num2}`);    }
else if(answer.operator==="Division"){
    let div=await inquirer.prompt([{message: "Enter the First Number: ",type: "number",name:"num1"},
{message: "Enter the Second Number: ",type: "number",name:"num2"},]);
    if(answer.num2!=0)
    console.log(`Division is: ${div.num1/div.num2}`);
    else
    console.log(`Invalid input ${answer.num2}`);
}
else if(answer.operator==="More Functions"){
let morefunction=await inquirer.prompt([{message:"More Functions:: ",type:"list",name:"additionalFunctions",choices:["Square","Cube","Square Root","Round off","Factorial","Natural Log","Log base 10","Back"] }
]);
if(morefunction.additionalFunctions==="Square"){
let power=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
console.log("Square is: "+Math.pow(power.num,2));
}
else if(morefunction.additionalFunctions==="Cube"){
    let cube=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    console.log("Cube is: "+Math.pow(cube.num,3));
}
else if(morefunction.additionalFunctions==="Square Root"){
    let sqrt=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    if(sqrt.num>0)
    console.log("Square Root is: "+Math.sqrt(sqrt.num));
    else
    console.log("Please enter the non-negative Value like as: "+(sqrt.num*-1));   
}
else if(morefunction.additionalFunctions==="Round off"){
    let round=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    console.log("Round off: "+Math.round(round.num));
}
else if(morefunction.additionalFunctions==="Factorial"){
    let fact=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    function factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
  console.log(`Factorial of ${fact.num}! is: ${factorial(fact.num)}`);
}
else if(morefunction.additionalFunctions==="Natural Log"){
    let nlog=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    console.log("Natural Log: "+Math.log(nlog.num));    
}
else if(morefunction.additionalFunctions==="Log base 10"){
    let log10=await inquirer.prompt([{message: "Enter a Number: ",type: "number",name:"num"}]);
    console.log(`Log is: ${Math.log10(log10.num)}`);    
}
else if(morefunction.additionalFunctions==="Back"){
    continue;
}
else
console.log("Invalid Input.!");
}
else if(answer.operator==="Exit"){
    console.log("Thanks for using calculator.");
    break;
}
else
console.log("Invalid Input.!");
}
while(keepgoing)


