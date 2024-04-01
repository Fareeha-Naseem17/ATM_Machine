#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

console.log("WELCOME TO THE ATM MACHINE");

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message:"Enter Your Pin code",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log("Correct Pin Code!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please Select an Option:",
                type: "list",
                choices: ["Withdraw Amount", "Check Balance"],
            }
        ]
    );

    if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: "Select a withdrawal method:",
                type: "list",
                choices:["Fast Cash", "Enter the Amount"]
            }
        ])
        if(withdrawAns.withdrawMethod === "Fast Cash"){
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Select Amount:",
                    type: "list",
                    choices: [2000, 3000, 5000, 6000]

                }
            ])
            if(fastCashAns.fastCash > myBalance){
                console.log("Insufficient Balance");

            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} Withdraw Sucessfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }

        }
        else if(withdrawAns.withdrawMethod === "Enter the Amount"){
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "Enter Your Amount to Withdraw:",
                        type: "number",
                    }
                ]
            );
    
           if(amountAns.amount > myBalance) {
            console.log("Insufficient Amount");
           } 
           else { 
            myBalance -= amountAns.amount; 
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
           } 

        }
        
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${myBalance}`);
    } 
      
}
else{
    console.log("Incorrect Pin code, Try Again.");
}