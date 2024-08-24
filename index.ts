#! /urs/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message:"enter your first number: ", type:"number", name:"firstnumber"},
    { message:"enter your second number: ", type:"number", name:"secondnumber"},
    { message:"select one of the operators to perform operation",
    type:"list",
    name:"operator",
    choices:["addition","subtrection","multiplication","division"],
}
]);
// condition statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "subtrection") {
    console.log(answer.firstnumber - answer.secondnumber)
}  else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
}  else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber)
}




















