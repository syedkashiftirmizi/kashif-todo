#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const ans :{
        Todo: string;
        addmore: boolean;
    } = await inquirer.prompt([
        {
            type:"input",
            name:"Todo",
            message:"What you want to do: "
        },
        {
            type:"confirm",
            name:"addmore",
            message:"Do You Have More To Add: ",
            default: false
        }
    ])
    const {Todo,addmore} = ans
    console.log(ans)
    loop = addmore
    if(Todo){
        todos.push(Todo)
    } else {
        console.log("Kindly Add valid input.")
    }
}

if (todos.length > 0) {
    console.log("Your Todo List:")
    todos.forEach((todo)=>{
        console.log(todo)
    })
} else {
    console.log("No Todos Found")
}